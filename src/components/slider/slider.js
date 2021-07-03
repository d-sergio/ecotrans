/**Внешние импорты:
 * src/libs/animate/animate.js
 * src/libs/react-hooks/use-previous-hook.js
*/

import React, {useState, useRef, useEffect} from 'react';
import usePrevious from '../../libs/react-hooks/use-previous-hook';
import {containerStyle, prevStyle, nextStyle, viewportStyle, carouselStyle, slideStyle} from './slider.module.css';
import updateSlideWidth from './update-slide-width';
import updateCarouselCoords from './update-carousel-coords';
import animateMove from './animate-move';

import setNewPosition from './set-new-position';
import createSlides from './create-slides';
//import createVisibleSlides from './alternative/create-visible-slides';
//import setNewPosition from './alternative/set-new-position-alternative';

function Slider(props) {
    /*Инициализация params. Здесь не добавляется поле children. Оно
    будет определено в первом useEffect инициализации.*/
    const params = useRef(createParams(props.params));

    /*Длительность анимации также указывает, вызывать ли анимацию после
    изменения состояния слайдера. Ноль - не вызывать анимацию.*/
    const animDuration = useRef(); 
    const animate = useRef();   //Здесь будет общедоступный объект анимации. 
    const carousel = useRef(null);
    const viewport = useRef(null);

    /*prevPosition - предыдущая позиция, с учётом добавленных слайдов.
    Проще её сохранить здесь сразу, чем вычислять потом.*/
    const initState = {
        prevPosition: 0,
        currentPosition: props.params.initPosition || 0,
        children: React.Children.toArray(props.children)
    };

    const [state, setState] = useState(initState);
    const [init, setInit] = useState(false);
    const prevState = usePrevious(state);

    /*Вызывается только один раз для инициализации params.current.children
    и установки размеров и начальных координат слайдера*/
    useEffect(() => {
        params.current.children = React.Children.toArray(props.children);
        updateWidthAndCoords();
        setInit(true);
    }, [init]);

    useEffect(() => {
        window.addEventListener('resize', updateWidthAndCoords);
        
        //запуск анимации
        if (animDuration.current > 0) {
            /*Корректировка слайдов и carousel, если добавились слайды
            Перед анимацией выставляем слайдер на предыдущую позицию!*/
            if (prevState.children !== state.children){
                updateSlideWidth(viewport.current, carousel.current, params.current.visible);
                updateCarouselCoords(carousel.current, state.prevPosition); //prevPosition!!!
            }

            animateMove(params.current, state, carousel.current, animate.current, animDuration.current);
        } else {
            updateWidthAndCoords();
        }
        return () => window.removeEventListener('resize', updateWidthAndCoords);
    });

    function updateWidthAndCoords() {
        updateSlideWidth(viewport.current, carousel.current, params.current.visible);
        updateCarouselCoords(carousel.current, state.currentPosition);
    }

    function buttonHandler(shift) {
        if (shift === 0) return;

        animDuration.current = params.current.duration; //Также указывает, что потребуется анимация.
        
        const destination = state.currentPosition + shift

        setNewPosition(destination, state, setState, params.current);

        //setNewPosition(shift, state, setState, params.current); //альтернативный вариант
    }

    return(
        <div className={containerStyle}>
            <div className={prevStyle} onClick={() => buttonHandler((-1))}>
                {params.current.prev}
            </div>

            <div className={viewportStyle} ref={viewport}>
                <div className={carouselStyle} ref={carousel}>
                    {createSlides(state.children, slideStyle)
                    /*
                    //альтерантивный вариант
                    createVisibleSlides(state.children, state.currentPosition, params.current.visible, slideStyle)
                    */}
                </div>
            </div>

            <div className={nextStyle} onClick={() => buttonHandler(1)}>
                {params.current.next}
            </div>
        </div>
    );
}

/**Если в объекте props.params заполнены не все поля, то меняем их на дефолтные*/
function createParams(sliderProps) {
    const defaults = {
        visible: 1,
        prev: null,
        next: null,
        duration: 500,
        callback: undefined
    };

    return Object.assign({}, defaults, sliderProps);
}
export default Slider;