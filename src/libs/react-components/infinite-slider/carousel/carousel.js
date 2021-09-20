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
    после нового рендера*/
    const slideShift = 1;

    const carouselRef = useRef();
    const [slides, setSlides] = useState();

    useEffect(() => createSlides({setSlides, props, additionalSlides}), //#1
    [props.currentPosition, props.visible]);
    useEffect(updateSlides, [slides]); //#2
    useEffect(() => updateCarouselCoords({carouselRef, slideShift}), [slides]); //#3
    useEffect(addListeners, []);
    useEffect(createCarouselObserver, [slides]);

    function updateSlides() { //#2
        if (!carouselRef.current) return;

        updateSlideWidth({carouselRef, props});
    }

    function addListeners() {
        window.addEventListener('resize', updateSlides);    //#2

        return () => {
            window.removeEventListener('resize', updateSlides);
        };
    }

    function createCarouselObserver() {
        if (!carouselRef.current || !slides) return;

        const carouselObserver = new MutationObserver(observerCallback);
        carouselObserver.observe(carouselRef.current, {attributes: true});

        function observerCallback(mutations) {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'style') {
                    updateCarousel();
                }
            });
        }

        return () => carouselObserver.disconnect();
    }

    function updateCarousel() {
        if (!carouselRef.current || !slides) return;

        const carouselShift = checkCarouselShift();
        const positionShift = -Math.ceil(carouselShift);

        if (positionShift >= 1 + additionalSlides) {
            const newPosition = calcNewPosition(positionShift) - 1;
            props.setPosition(newPosition);
        } else if (positionShift <= 0) {
            const newPosition = calcNewPosition(positionShift);
            props.setPosition(newPosition);
        }
    }

    function checkCarouselShift() {
        if (!carouselRef.current || !slides) return;

        const slideWidth = carouselRef.current.firstChild.offsetWidth;
        const carouselMarginLeft = getComputedStyle(carouselRef.current).marginLeft;
        const parsedMarginLeft = parseInt(carouselMarginLeft);

        const carouselShift = parsedMarginLeft / slideWidth;

        return carouselShift;
    }

    function calcNewPosition(positionShift) {
        const childrenLength = React.Children.toArray(props.children).length;
        const expectedPosition = props.currentPosition + positionShift;

        if (expectedPosition < 0) {
            return childrenLength + positionShift;

        } else if (expectedPosition >= childrenLength) {
            return expectedPosition - childrenLength;

        } else {
            return expectedPosition;
        }
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