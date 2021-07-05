/**Внешние импорты:
 * src/libs/animate/animate.js
 * src/libs/react/react-hooks/use-previous-hook.js
*/

//Настраиваемые импорты
//выбрать папку ordinary/inertial для соответствующего способа прокрутки (см. slider-readme.txt)
import mouseHandler from '../slider/event-handlers/ordinary/mouse-handler';
import touchHandler from '../slider/event-handlers/ordinary/touch-handler';

//Остальные импорты
import React, {useState, useRef, useEffect} from 'react';
import usePrevious from '../../libs/react/react-hooks/use-previous-hook';
import updateSlideWidth from '../slider/mechanics/update-slide-width';
import updateCarouselCoords from '../slider/mechanics/update-carousel-coords';
import animateMove from '../slider/animation/animate-move';
import {containerStyle, prevStyle, nextStyle, viewportStyle, carouselStyle, slideStyle} from './slider.module.css';

import setNewPosition from '../slider/mechanics/set-new-position';
import createSlides from '../slider/mechanics/create-slides';
//import createVisibleSlides from './alternative/create-visible-slides';
//import setNewPosition from './alternative/set-new-position-alternative';

function Slider(props) {
    const children = React.Children.toArray(props.children);

    /*prevPosition - предыдущая позиция, с учётом добавленных слайдов.
    Проще её сохранить здесь сразу, чем вычислять потом.*/
    const initPosition = props.params.initPosition === undefined ||
                        props.params.initPosition === null ?
                        0: props.params.initPosition;

    const initState = {
        prevPosition: 0,
        currentPosition: initPosition + children.length,
        children: children.concat(children)
    };

    /*Инициализация params. Здесь не добавляется поле children. Оно
    будет определено в первом useEffect инициализации.*/
    const params = useRef(createParams(props.params));

    /*Длительность анимации также указывает, вызывать ли анимацию после
    изменения состояния слайдера. Ноль - не вызывать анимацию.*/
    const animDuration = useRef(); 
    const animate = useRef();   //Здесь будет общедоступный объект анимации. 
    const carousel = useRef(null);
    const viewport = useRef(null);

    const [state, setState] = useState(initState);
    const prevState = usePrevious(state);

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
            /*Корректировка слайдов и carousel, если добавились слайды
            Перед анимацией выставляем слайдер на предыдущую позицию!*/
            if (prevState.children !== state.children){
                const adjacentCorrect = calcAdjacentCorrect(carousel.current, params.current.adjacent);

                updateSlideWidth(viewport.current, carousel.current, params.current.visible, adjacentCorrect);
                updateCarouselCoords(carousel.current, state.prevPosition, adjacentCorrect); //prevPosition!!!
            }

            const adjacentCorrect = calcAdjacentCorrect(carousel.current, params.current.adjacent);

            animateMove(params.current,
                state, carousel.current,
                animate.current,
                animDuration.current,
                adjacentCorrect);
        } else {
            updateWidthAndCoords();
        }

        return () => window.removeEventListener('resize', updateWidthAndCoords);
    }

    function updateWidthAndCoords() {
        const adjacentCorrect = calcAdjacentCorrect(carousel.current, params.current.adjacent);

        updateSlideWidth(viewport.current, carousel.current, params.current.visible, adjacentCorrect);
        updateCarouselCoords(carousel.current, state.currentPosition, adjacentCorrect);
    }

    function buttonHandler(shift) {
        if (shift === 0) return;

        animDuration.current = params.current.duration; //Также указывает, что потребуется анимация.
        
        const destination = state.currentPosition + shift

        setNewPosition(destination, state, setState, params.current, viewport.current, carousel.current);

        //setNewPosition(shift, state, setState, params.current, viewport.current, carousel.current); //альтернативный вариант
    }

    function startMouseHandler(e) {
        if (params.current.freeze) return;

        const adjacentCorrect = calcAdjacentCorrect(carousel.current, params.current.adjacent);

        mouseHandler(e,
            params.current,
            state, setState,
            viewport.current,
            carousel.current,
            animate.current,
            animDuration,
            adjacentCorrect);
    }

    function startTouchHandler(e) {
        if (params.current.freeze) return;

        const adjacentCorrect = calcAdjacentCorrect(carousel.current, params.current.adjacent);

        touchHandler(e,
            params.current,
            state, setState,
            viewport.current,
            carousel.current,
            animate.current,
            animDuration,
            adjacentCorrect);
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
                    createVisibleSlides(state.children, state.currentPosition, params.current.visible, viewport.current, carousel.current, slideStyle)
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
        adjacent: 0,
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

function calcAdjacentCorrect(carousel, adjacent) {
    if (carousel !== null && carousel.firstChild !== null) {
        return Number(adjacent * carousel.firstChild.offsetWidth);
    }
}

export default Slider;