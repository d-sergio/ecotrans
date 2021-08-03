/**Внешние импорты:
 * src/libs/animate/animate.js
 * src/libs/react/react-hooks/use-previous-hook.js
*/

import defaultProps from '../slider/default-props';
//Настраиваемые импорты
//выбрать папку ordinary/inertial для соответствующего способа прокрутки (см. slider-readme.txt)
//import mouseHandler from '../slider/event-handlers/ordinary/mouse-handler';
//import touchHandler from '../slider/event-handlers/ordinary/touch-handler';

//Остальные импорты
import React, {useState, useRef, useEffect} from 'react';
import usePrevious from '../../../react/react-hooks/use-previous-hook';
import updateSlideWidth from '../slider/mechanics/update-slide-width';
import updateCarouselCoords from '../slider/mechanics/update-carousel-coords';
import animateMove from '../slider/animation/animate-move';
import {containerStyle, prevStyle, nextStyle, viewportStyle, carouselStyle, slideStyle} from './slider.module.css';
import getVisible from '../slider/mechanics/get-visible';
import checkBounds from '../slider/mechanics/check-bounds';

import setNewPosition from '../slider/mechanics/set-new-position';
import createAlwaysActive from '../slider/create-slides/create-always-active';
//import createVisibleSlides from './alternative/create-visible-slides';
//import setNewPosition from './alternative/set-new-position-alternative';

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
    //const stateRef = useRef(state); /** #1 актуальное состояние для  startTouchHandler*/
    const container = useRef(null); /**********МОДИФИКАЦИЯ**********/
    const prev = useRef(null);  /**********МОДИФИКАЦИЯ**********/
    const next = useRef(null);  /**********МОДИФИКАЦИЯ**********/

    /*Вызывается только один раз для установки размеров и начальных координат слайдера*/
    useEffect(() => initialize(), []);

    //useEffect(() => addTouchHandler(), []); /** #1 */

    useEffect(() => updateComponent());

    useEffect(() => autoMoveStart(), [state.currentPosition]);
    
    function initialize() {
        updateWidthAndCoords();
    }

    /** #1 startTouchHandler с опцией {passive: false}*/
    /*function addTouchHandler() {
        if (!carousel.current) return;

        carousel.current.addEventListener('touchstart', startTouchHandler, {passive: false});

        return () => carousel.current.removeEventListener('touchstart', startTouchHandler, {passive: false});
    }*/

    function updateComponent() {
        //stateRef.current = state;/** #1 актуальное состояние для startTouchHandler */

        window.addEventListener('resize', updateWidthAndCoords);

        if (typeof(props.visible) === 'object' || props.visible === 0) {
            window.addEventListener('resize', startCheckBounds);
        }

        //запуск анимации
        if (animDuration.current > 0) {

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

                /*Перед анимацией сдвигаем carousel в предыдещее положение prevMargin*/
                if (carousel.current !== undefined || carousel.current !== null) {
                    carousel.current.style.marginLeft = state.prevMargin + 'px';
                }
            }

            const moveArgs = {
                params: props,
                state: state,
                animate: animate.current,
                animDuration: animDuration.current,
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
        updateArrowsCoords();   /**********МОДИФИКАЦИЯ**********/
    }

    /**********МОДИФИКАЦИЯ**********/
    /**Находим и устанавливаем координаты кнопок управления */
    function updateArrowsCoords() {
        if (!container.current || !carousel.current || !prev.current || !next.current) return;

        const left = container.current.offsetWidth * 0.5 - carousel.current.firstChild.offsetWidth * 0.5 - props.buttonShift + 'px';
        prev.current.style.left = left;

        const right = container.current.offsetWidth * 0.5 - carousel.current.firstChild.offsetWidth * 0.5 - props.buttonShift + 'px';
        next.current.style.right = right;
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
        
        const destination = state.currentPosition + shift

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

    /*function startMouseHandler(e) {
        if (props.freeze) return;

        const adjacentCorrect = calcAdjacentCorrect();*/
        
        /*animDuration без current, так как задать новое значение в mouseHandler
        можно будет только через animDuration.current = ... */
        /*const mouseArgs = {
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
    }*/

    /*function startTouchHandler(e) {
        if (props.freeze) return;

        const adjacentCorrect = calcAdjacentCorrect();*/

        /*animDuration без current, так как задать новое значение в touchHandler
        можно будет только через animDuration.current = ... */
        /*const touchArgs = {
            e: e,
            params: props,
            state: stateRef.current,/** #1 актуальное состояние*/
            /*setState: setState,
            animate: animate.current,
            animDuration: animDuration,
            carousel: carousel.current,
            viewport: viewport.current,
            adjacentCorrect: adjacentCorrect
        };

        touchHandler(touchArgs);
    }*/

    /**Старт автопрокрутки карусели */
    function autoMoveStart() {
        if (!autoMove) return;
        
        timer.current = setTimeout(() => buttonHandler(1), props.moveInterval);

        return () => clearTimeout(timer.current);
    }

    /**Отмена автопрокрутки карусели */
    function cancelAutoMove() {
        if (!timer.current || !props.cancelAutoMove) return;

        if (animate.current) animate.current.cancel();
        
        clearTimeout(timer.current);

        setAutoMove(false);
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
        <div className={containerStyle} ref={container}
            onMouseEnter={() => state.autoMove ? cancelAutoMove() : null}
            onTouchStart={() => state.autoMove ? cancelAutoMove() : null}>

            <div ref={prev} className={prevStyle} onClick={() => buttonHandler((-1))}>
                {props.freeze ? null : props.prev}
            </div>

            <div className={viewportStyle} ref={viewport}>
                <div className={carouselStyle}
                    ref={carousel}
                    /*onMouseDown={(e) => startMouseHandler(e)}*/
                >
                    {
                        createAlwaysActive({    /**********МОДИФИКАЦИЯ**********/
                            children: state.children,
                            currentPosition: state.currentPosition,
                            slideStyle: slideStyle,
                            viewport: viewport.current,
                            carousel: carousel.current,
                            visible: props.visible,
                            autoMove: state.autoMove
                        })
                    }
                </div>
            </div>

            <div ref={next} className={nextStyle} onClick={() => buttonHandler(1)}>
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
    disableScrollingOn: defaultProps.disableScrollingOn,
    autoMove: defaultProps.autoMove,
    cancelAutoMove: defaultProps.cancelAutoMove,
    moveInterval: defaultProps.moveInterval,
    callback: defaultProps.callback,
        /**********МОДИФИКАЦИЯ**********/
    /*на сколько пикселей влево и вправо от центрального слайда сместить кнопки
    управления слайдером*/
    buttonShift: 0
};

export default Slider;