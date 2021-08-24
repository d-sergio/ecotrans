import React, { useEffect, useState, useRef } from 'react';
import { carouselStyle } from './carousel.module.css';
import createSlides from './create-slides/create-slides';
import updateSlideWidth from './update-slide-width';
import handleTouch from './pointer-handlers/handle-touch';

/**
 * #1 Создать слайды
 * #2 Адаптация размеров слайдов. Запускается после добавления слайдов
 * #3 Обработка touch-events
*/
function Carousel(props) {
    const carouselRef = useRef();
    const [slides, setSlides] = useState();

    useEffect(() => createSlides(setSlides, props), //#1
    [props.currentPosition, props.visible]);

    useEffect(addListeners, [slides]);

    /**Обработчики событий resize и touch-events */
    function addListeners() {
        if (!carouselRef.current) return;

        updateSlides(); //#2
        
        window.addEventListener('resize', updateSlides);    //#2
        carouselRef.current.addEventListener(               //#3
            'touchstart', onTouchStart, {passive: false}
        );

        function updateSlides() {
            updateSlideWidth(carouselRef.current, props.visible);
        }

        return () => {
            window.removeEventListener('resize', updateSlides);
            
            if (carouselRef.current) {
                carouselRef.current.removeEventListener(
                    'touchstart', onTouchStart, {passive: false}
                );
            }
        };
    }

    function onTouchStart(event) {
        handleTouch({
            carousel: carouselRef.current,
            lockScroll: props.lockScroll,
            event: event
        });
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