import React, {useState, useRef, useEffect} from 'react';
import {containerStyle, prevStyle, nextStyle, viewportStyle, carouselStyle, slideStyle} from './slider.module.css';
import updateSlideWidth from './update-slide-width';
import createSlides from './create-slides';
import updateCarouselCoords from './update-carousel-coords';
import getVisible from './get-visible';

function Slider(props) {
    const params = createParams(props.params);

    const carousel = useRef(null);
    const viewport = useRef(null);

    const initState = {
        currentPosition: 0,
        children: React.Children.toArray(props.children)
    };

    const [state, setState] = useState(initState);
    const [init, setInit] = useState(false);

    useEffect(() => {
        updateSlideWidth(viewport.current, carousel.current, params.visible);
        updateCarouselCoords(carousel.current, state.currentPosition);
        setInit(true);
    }, [init]);

    useEffect(() => {
        //запуск анимации
        updateSlideWidth(viewport.current, carousel.current, params.visible);
        updateCarouselCoords(carousel.current, state.currentPosition);
    });

    function buttonHandler(shift) {
        setNewPosition(state.currentPosition + shift);
    }

    function setNewPosition(destination) {
        let newPosition = destination;
        let newChildren = state.children;

        const visible = getVisible(params.visible);

        //Добавление слайдов в carousel слева или справа дублированием children.
        //Смысл в том, что слева и справа от новой позиции всегда должен быть запас
        //элементов, равный или больше visible
        if (destination - visible < 0 || destination + visible > state.children.length) {
            newChildren = newChildren.concat(newChildren);
        }

        //если позиция уходит в отрицательные значения, то слева появятся продублированные
        //children. Просто пересчитаем позицию в с их учётом и она станет положительной
        if (destination < 0) {
            newPosition = state.children.length - visible;
        };

        setState(
            {
                currentPosition: newPosition,
                children: newChildren
            }
        );
    }

    return(
        <div className={containerStyle}>
            <div className={prevStyle} onClick={() => buttonHandler((-1))}>
                {params.prev}
            </div>

            <div className={viewportStyle} ref={viewport}>
                <div className={carouselStyle} ref={carousel}>
                    {createSlides(state.children, slideStyle)}
                </div>
            </div>

            <div className={nextStyle} onClick={() => buttonHandler(1)}>
                {params.next}
            </div>
        </div>
    );
}

/**Если в объекте props.params заполнены не все поля, то меняем их на дефолтные*/
function createParams(sliderProps) {
    const defaults = {
        visible: 1,
        prev: null,
        next: null
    };

    return Object.assign({}, defaults, sliderProps);
}
export default Slider;