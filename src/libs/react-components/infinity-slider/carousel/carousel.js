import React, { useEffect, useState, useRef } from 'react';
import { carouselStyle } from './carousel.module.css';
import createSlides from './create-slides/create-slides';
import updateSlideWidth from './after-render/update-slide-width';
import updateCarouselCoords from './after-render/update-carousel-coords';

/**
 * #1 Создать слайды
 * #2 Адаптация размеров слайдов. Запускается после добавления слайдов
 * #3 Сдвиг карусели на значение slideShift
*/
function Carousel(props) {
    /*сколько слайдов отрисовывать за пределами viewport слева и справа от него*/
    const additionalSlides = 1;
    /*на сколько слайдов влево (при положительном значении) надо сдвинуть карусель
    после рендера*/
    const slideShift = 1;

    const carouselRef = useRef();
    const [slides, setSlides] = useState();

    useEffect(() => createSlides({setSlides, props, additionalSlides}), //#1
    [props.currentPosition, props.visible]);

    useEffect(updateSlides, [slides]); //#2
    useEffect(() => updateCarouselCoords({carouselRef, slideShift}), [slides]); //#3
    useEffect(addListeners, []);

    function updateSlides() {
        if (!carouselRef.current) return;

        updateSlideWidth({carouselRef, props});
    }

    function addListeners() {
        window.addEventListener('resize', updateSlides);    //#2

        return () => {
            window.removeEventListener('resize', updateSlides);
        };
    }

    return(
        <div
            ref={carouselRef}
            className={carouselStyle}
        >
            {slides}
        </div>
    );
}

export default Carousel;

Carousel.defaultProps = {
    visible: 1,
    currentPosition: 0,
    children: <></>,
    lockScroll: 0.0606 
}