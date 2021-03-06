/**Внешние импорты:
 * src/libs/animate/animate.js
 * src/libs/react/react-hooks/use-previous-hook.js
*/

import defaultProps from '../slider/default-props';
//Настраиваемые импорты
//выбрать папку ordinary/inertial для соответствующего способа прокрутки (см. slider-readme.txt)
import mouseHandler from '../slider/event-handlers/ordinary/mouse-handler';
import touchHandler from '../slider/event-handlers/ordinary/touch-handler';

//Остальные импорты
import React, {useState, useRef, useEffect} from 'react';
import usePrevious from '../../../react/react-hooks/use-previous-hook';
import updateSlideWidth from '../slider/mechanics/update-slide-width';
import updateCarouselCoords from '../slider/mechanics/update-carousel-coords';
import animateMove from './animation/animate-move';
import {containerStyle, prevStyle, nextStyle, viewportStyle, carouselStyle, slideStyle} from '../slider/slider.module.css';
import getVisible from '../slider/mechanics/get-visible';
import checkBounds from '../slider/mechanics/check-bounds';

import setNewPosition from '../slider/mechanics/set-new-position';
import createAlwaysActive from '../slider/create-slides/create-always-active';

function Slider(props) {
    const children = React.Children.toArray(props.children);

    /*Только инициализация
    prevPosition - предыдущая позиция, с учётом добавленных слайдов.
    prevMargin - положение carousel, перед изменением количества слайдов.
    Проще и быстрее сохранять их в состоянии, чем вычислять потом.
        children копируются в состояние, так как для бесконечной прокрутки
    надо менять их количество.
        Слева и справа от текущей позиции при инициализации появляются дубликаты
    children, поэтому currentPosition меняем, чтобы компенсировать этот сдвиг*/
    const initState = {
        prevPosition: 0,
        prevMargin: 0,
        children: children.concat(children, children),
        currentPosition: props.initPosition + children.length,
    };

    const [state, setState] = useState(initState);
    const [autoMove, setAutoMove] = useState(props.autoMove); //Автопрокрутка карусели
    const prevState = usePrevious(state);

    /*Длительность анимации animDuration также указывает, вызывать ли анимацию
    после изменения состояния слайдера. Ноль - не вызывать анимацию.*/
    const animDuration = useRef(0); 
    const animate = useRef(undefined);   //Здесь будет общедоступный объект анимации. 
    const timer = useRef(undefined);    //Здесь будет setTimeout для автопрокрутки карусели
    const carousel = useRef(null);
    const viewport = useRef(null);
    const stateRef = useRef(state); /** #1 актуальное состояние для  startTouchHandler*/

    /*Вызывается только один раз для установки размеров и начальных координат слайдера*/
    useEffect(() => initialize(), []);

    useEffect(() => addTouchHandler(), []); /** #1 */

    useEffect(() => updateComponent()/*, [state.currentPosition]*/);

    useEffect(() => autoMoveStart(), [state.currentPosition]);

    useEffect(() => {   //Только запустить автопрокрутку
        if (props.autoMove) buttonHandler(1);
    }, []);
    
    function initialize() {
        if (props.autoMove) timer.current = 1;  //Только запустить слайдер
        
        updateWidthAndCoords();
    }

    /** #1 startTouchHandler с опцией {passive: false}*/
    function addTouchHandler() {
        if (!carousel.current) return;

        carousel.current.addEventListener('touchstart', startTouchHandler, {passive: false});

        return () => {
            if (carousel.current) {
                carousel.current.removeEventListener('touchstart', startTouchHandler, {passive: false});
            }
        }
    }    

    function updateComponent() {
        stateRef.current = state;/** #1 актуальное состояние для startTouchHandler */

        window.addEventListener('resize', updateWidthAndCoords);

        if (typeof(props.visible) === 'object' || props.visible === 0) {
            window.addEventListener('resize', startCheckBounds);
        }

        //запуск анимации
        if (animDuration.current > 0) {
            if (!timer.current) setAutoMove(false);

            if (animate.current) animate.current.cancel();

            const adjacentCorrect = calcAdjacentCorrect();

            if (prevState.children !== state.children){
                /*Корректировка слайдов и carousel, если добавились слайды*/
                const slideArgs = {
                    visible: props.visible,
                    carousel: carousel.current,
                    viewport: viewport.current,
                    adjacentCorrect: adjacentCorrect
                };

                updateSlideWidth(slideArgs);

                /*Перед анимацией сдвигаем carousel в предыдущее положение prevMargin*/
                if (carousel.current !== undefined || carousel.current !== null) {
                    carousel.current.style.marginLeft = state.prevMargin + 'px';
                }
            }

            const moveArgs = {
                params: props,
                state: state,
                animate: animate,
                animDuration: animDuration,
                carousel: carousel.current,
                adjacentCorrect: adjacentCorrect
            };

            animateMove(moveArgs);
        } else {
            updateWidthAndCoords();
        }

        return () => {
            window.removeEventListener('resize', updateWidthAndCoords);

            if (typeof(props.visible) === 'object' || props.visible === 0) {
                window.removeEventListener('resize', startCheckBounds);
            }
        };
    }

    function updateWidthAndCoords() {

        const adjacentCorrect = calcAdjacentCorrect();

        const slideArgs = {
            visible: props.visible,
            carousel: carousel.current,
            viewport: viewport.current,
            adjacentCorrect: adjacentCorrect
        };

        const coordsArgs = {
            currentPosition: state.currentPosition,
            carousel: carousel.current,
            adjacentCorrect: adjacentCorrect
        };

        updateSlideWidth(slideArgs);
        updateCarouselCoords(coordsArgs);
    }

    /**Рассчитать то свободное пространство, которые могут заполнить соседние
     * слайды, не попадающие в viewport */
    function calcAdjacentCorrect() {
        if (!props.adjacent) return 0;
    
        if (!carousel.current || !carousel.current.firstChild || !viewport.current) return;

        const visibleArgs = {
            visible: props.visible,
            viewport: viewport.current,
            carousel: carousel.current
        };
        
        const slideWidth = carousel.current.firstChild.offsetWidth;
        const viewportWidth = viewport.current.offsetWidth;
        const widthOfVisible = getVisible(visibleArgs) * slideWidth;

        return (viewportWidth - widthOfVisible) / 2;
    }

    function buttonHandler(shift) {
        if (shift === 0) return;

        animDuration.current = props.duration; //Также указывает, что потребуется анимация.
        
        const destination = state.currentPosition + shift;

        const positionArgs = {
            params: props,
            state: state,
            setState: setState,
            viewport: viewport.current,
            carousel: carousel.current,
            destination: destination
        };

        setNewPosition(positionArgs);

        //setNewPosition(shift, state, setState, props, viewport.current, carousel.current); //альтернативный вариант
    }

    function startMouseHandler(e) {
        if (props.freeze) return;

        /*Отключить автопрокрутку немедленно*/
        if (autoMove && props.cancelAutoMove) {
            clearTimeout(timer.current);
            timer.current = undefined;
            animDuration.current = props.duration;
        }

        const adjacentCorrect = calcAdjacentCorrect();
        
        /*animDuration без current, так как задать новое значение в mouseHandler
        можно будет только через animDuration.current = ... */
        const mouseArgs = {
            e: e,
            params: props,
            state: state,
            setState: setState,
            carousel: carousel.current,
            animate: animate.current,
            animDuration: animDuration,
            viewport: viewport.current,
            adjacentCorrect: adjacentCorrect
        };

        mouseHandler(mouseArgs);
    }

    function startTouchHandler(e) {
        if (props.freeze) return;

        /*Отключить автопрокрутку через колбэк*/
        const autoMoveOff = () => {
            if (autoMove && props.cancelAutoMove) {
                clearTimeout(timer.current);
                timer.current = undefined;
                animDuration.current = props.duration;
            }
        };

        const adjacentCorrect = calcAdjacentCorrect();

        /*animDuration без current, так как задать новое значение в touchHandler
        можно будет только через animDuration.current = ... */
        const touchArgs = {
            e: e,
            params: props,
            state: stateRef.current,/** #1 актуальное состояние*/
            setState: setState,
            animate: animate.current,
            animDuration: animDuration,
            carousel: carousel.current,
            viewport: viewport.current,
            adjacentCorrect: adjacentCorrect,
            autoMoveOff: autoMoveOff
        };

        touchHandler(touchArgs);
    }

    /**Старт автопрокрутки карусели */
    function autoMoveStart() {
        if (!autoMove) return;

        if (!timer.current) return;
        
        timer.current = setTimeout(() => buttonHandler(1), props.moveInterval);

        return () => clearTimeout(timer.current);
    }

    function startCheckBounds() {
        const boundsArgs = {
            state: state,
            setState: setState,
            visible: props.visible,
            viewport: viewport.current,
            carousel: carousel.current,
            animDuration: animDuration
        };

        checkBounds(boundsArgs);
    }

    return(
        <div className={containerStyle}>

            <div className={prevStyle} onClick={() => buttonHandler((-1))}>
                {props.freeze ? null : props.prev}
            </div>

            <div className={viewportStyle} ref={viewport}>
                <div className={carouselStyle}
                    ref={carousel}
                    onMouseDown={(e) => startMouseHandler(e)}
                >
                    {
                        createAlwaysActive({    /**********МОДИФИКАЦИЯ**********/
                            children: state.children,
                            currentPosition: state.currentPosition,
                            autoMove: autoMove,
                            slideStyle: slideStyle,
                            viewport: viewport.current,
                            carousel: carousel.current,
                            visible: props.visible
                        })
                    }
                </div>
            </div>

            <div className={nextStyle} onClick={() => buttonHandler(1)}>
                {props.freeze ? null : props.next}
            </div>
        </div>
    );
}

Slider.defaultProps = {
    initPosition: defaultProps.initPosition,
    visible: defaultProps.visible,
    adjacent: defaultProps.adjacent,
    freeze: defaultProps.freeze,
    prev: defaultProps.prev,
    next: defaultProps.next,
    duration: defaultProps.duration,
    treshold: defaultProps.treshold,
    friction: defaultProps.friction,
    disablePageScroll: defaultProps.disablePageScroll,
    autoMove: defaultProps.autoMove,
    cancelAutoMove: defaultProps.cancelAutoMove,
    moveInterval: defaultProps.moveInterval,
    callback: defaultProps.callback
};

export default Slider;