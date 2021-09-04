import React, { useEffect, useState, useRef } from 'react';
import { carouselStyle } from './carousel.module.css';
import createSlides from './create-slides/create-slides';
import updateSlideWidth from './update-slide-width';

/**
 * #1 Создать слайды
 * #2 Адаптация размеров слайдов. Запускается после добавления слайдов
*/
function Carousel(props) {
    const carouselRef = useRef();
    const [slides, setSlides] = useState();

    useEffect(() => createSlides(setSlides, props), //#1
    [props.currentPosition, props.visible]);

    useEffect(addResizeListener, [slides]);

    /**Обработчики событий resize*/
    function addResizeListener() {
        if (!carouselRef.current) return;

        updateSlides(); //#2
        
        window.addEventListener('resize', updateSlides);    //#2

        function updateSlides() {
            updateSlideWidth(carouselRef.current, props.visible);
        }

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