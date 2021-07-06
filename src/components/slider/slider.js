/**Внешние импорты:
 * src/libs/animate/animate.js
 * src/libs/react/react-hooks/use-previous-hook.js
*/

//Настраиваемые импорты
//выбрать папку ordinary/inertial для соответствующего способа прокрутки (см. slider-readme.txt)
import mouseHandler from './event-handlers/ordinary/mouse-handler';
import touchHandler from './event-handlers/ordinary/touch-handler';

//Остальные импорты
import React, {useState, useRef, useEffect} from 'react';
import usePrevious from '../../libs/react/react-hooks/use-previous-hook';
import updateSlideWidth from './mechanics/update-slide-width';
import updateCarouselCoords from './mechanics/update-carousel-coords';
import animateMove from './animation/animate-move';
import {containerStyle, prevStyle, nextStyle, viewportStyle, carouselStyle, slideStyle} from './slider.module.css';
import getVisible from './mechanics/get-visible';

import setNewPosition from './mechanics/set-new-position';
import createSlides from './mechanics/create-slides';
//import createVisibleSlides from './alternative/create-visible-slides';
//import setNewPosition from './alternative/set-new-position-alternative';

function Slider(props) {
    const children = React.Children.toArray(props.children);

    const initPosition = props.params.initPosition === undefined ||
                        props.params.initPosition === null ?
                        0: props.params.initPosition;

    /*prevPosition - предыдущая позиция, с учётом добавленных слайдов.
    prevMargin - положение carousel, перед изменением количества слайдов.
    Проще и быстрее сохранять их в состоянии, чем вычислять потом.*/
    const initState = {
        prevPosition: 0,
        prevMargin: 0,
        currentPosition: initPosition + children.length,
        children: children.concat(children)
    };

    const [state, setState] = useState(initState);
    const prevState = usePrevious(state);

    /*Инициализация params. Здесь не добавляется поле children. Оно
    будет определено в первом useEffect инициализации.*/
    const params = useRef(createParams(props.params));

    /*Длительность анимации также указывает, вызывать ли анимацию после
    изменения состояния слайдера. Ноль - не вызывать анимацию.*/
    const animDuration = useRef(); 
    const animate = useRef();   //Здесь будет общедоступный объект анимации. 
    const carousel = useRef(null);
    const viewport = useRef(null);

    /*Вызывается только один раз для инициализации params.current.children
    и установки размеров и начальных координат слайдера*/
    useEffect(() => initialize(), []);

    useEffect(() => updateComponent());

    function initialize() {
        params.current.children = children;
        updateWidthAndCoords();
    }

    function updateComponent() {
        window.addEventListener('resize', updateWidthAndCoords);

        //запуск анимации
        if (animDuration.current > 0) {

            const adjacentArgs = {
                adjacent: params.current.adjacent,
                freeze: params.current.freeze,
                visible: params.current.visible,
                carousel: carousel.current,
                viewport:viewport.current
            };

            const adjacentCorrect = calcAdjacentCorrect(adjacentArgs);

            if (prevState.children !== state.children){
                /*Корректировка слайдов и carousel, если добавились слайды*/
                const slideArgs = {
                    visible: viewport.current,
                    carousel: carousel.current,
                    viewport: params.current.visible,
                    adjacentCorrect: adjacentCorrect
                };

                updateSlideWidth(slideArgs);

                /*Перед анимацией сдвигаем carousel в предыдещее положение prevMargin*/
                carousel.current.style.marginLeft = state.prevMargin + 'px';
            }

            const moveArgs = {
                params: params.current,
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

        return () => window.removeEventListener('resize', updateWidthAndCoords);
    }

    function updateWidthAndCoords() {
        const adjacentArgs = {
            adjacent: params.current.adjacent,
            freeze: params.current.freeze,
            visible: params.current.visible,
            carousel: carousel.current,
            viewport:viewport.current
        };

        const adjacentCorrect = calcAdjacentCorrect(adjacentArgs);

        const slideArgs = {
            visible: viewport.current,
            carousel: carousel.current,
            viewport: params.current.visible,
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

    function buttonHandler(shift) {
        if (shift === 0) return;

        animDuration.current = params.current.duration; //Также указывает, что потребуется анимация.
        
        const destination = state.currentPosition + shift

        const positionArgs = {
            params: params.current,
            state: state,
            setState: setState,
            viewport: viewport.current,
            carousel: carousel.current,
            destination: destination
        };

        setNewPosition(positionArgs);

        //setNewPosition(shift, state, setState, params.current, viewport.current, carousel.current); //альтернативный вариант
    }

    function startMouseHandler(e) {
        if (params.current.freeze) return;

        const adjacentArgs = {
            adjacent: params.current.adjacent,
            freeze: params.current.freeze,
            visible: params.current.visible,
            carousel: carousel.current,
            viewport:viewport.current
        };

        const adjacentCorrect = calcAdjacentCorrect(adjacentArgs);

        const mouseArgs = {
            e: e,
            params: params.current,
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
        if (params.current.freeze) return;

        const adjacentArgs = {
            adjacent: params.current.adjacent,
            freeze: params.current.freeze,
            visible: params.current.visible,
            carousel: carousel.current,
            viewport:viewport.current
        };

        const adjacentCorrect = calcAdjacentCorrect(adjacentArgs);

        /*animDuration без current, так как задать новое значение можно будет
        потом только через animDuration.current = ... */
        const touchArgs = {
            e: e,
            params: params.current,
            state: state,
            setState: setState,
            animate: animate.current,
            animDuration: animDuration,
            carousel: carousel.current,
            viewport: viewport.current,
            adjacentCorrect: adjacentCorrect
        };

        touchHandler(touchArgs);
    }

    return(
        <div className={containerStyle}>
            <div className={prevStyle} onClick={() => buttonHandler((-1))}>
                {params.current.freeze ? null : params.current.prev}
            </div>

            <div className={viewportStyle} ref={viewport}>
                <div className={carouselStyle}
                ref={carousel}
                onMouseDown={(e) => startMouseHandler(e)}
                onTouchStart={(e) => startTouchHandler(e)}>
                    {createSlides(state.children, slideStyle)
                    /*
                    //альтерантивный вариант
                    createVisibleSlides(state.children, state.currentPosition, params.current.visible, viewport.current, carousel.current, slideStyle, adjacentCorrect)
                    */}
                </div>
            </div>

            <div className={nextStyle} onClick={() => buttonHandler(1)}>
                {params.current.freeze ? null : params.current.next}
            </div>
        </div>
    );
}

/**Если в объекте props.params заполнены не все поля, то меняем их на дефолтные*/
function createParams(sliderProps) {
    const defaults = {
        initPosition: 0,
        visible: 1,
        adjacent: false,
        freeze: false,
        prev: null,
        next: null,
        duration: 500,
        treshold: 0.2,
        friction: 5,
        disableScrollingOn: 10,
        callback: undefined
    };

    return Object.assign({}, defaults, sliderProps);
}

function calcAdjacentCorrect({adjacent, freeze, visible, carousel, viewport}) {
    if (freeze || !adjacent) return 0;

    if (carousel !== null && carousel.firstChild !== null && viewport !== null) {
        const visibleArgs = {visible, viewport, carousel};
        
        const slideWidth = carousel.firstChild.offsetWidth;
        const viewportWidth = viewport.offsetWidth;
        const widthOfVisible = getVisible(visibleArgs) * slideWidth;

        return (viewportWidth - widthOfVisible) / 2;
    } else {
        console.log(`Slider: calcAdjacentCorrect() остановлен. refs: carousel is ${carousel}.`)
    }
}

export default Slider;