import React, { useEffect, useRef } from 'react';
import {container, prevSlideStyle} from './slider.module.css';
import usePrevious from '../../../react/react-hooks/use-previous-hook';
import startAnimation from './start-animation';

/**Слайдер в центре
 * 
 * Props:
 * currentPosition - текущая позиция
 * slideTopCorrect - сдвиг слайдера вниз от обычной позиции в px
 * duration - длительность анимации
*/
function Slider(props) {
    const containerRef = useRef(null);
    const prevSlideRef = useRef(null);
    const currentSlideRef = useRef(null);
    const animate = useRef(undefined); //здесь будут объекты анимации

    const prevPosition = usePrevious(props.currentPosition);

    useEffect(() => setSlideCoords(), []);

    useEffect(() => startAnimation({prevSlideRef, currentSlideRef, prevPosition, animate, props}),
    [props.currentPosition]);

    /**По горизонтали слайд центрируется в Spinner, а координаты по
     * вертикали рассчитываются здесь. Слайд будет находиться внизу
     * контейнера.
     */
    function setSlideCoords() {
        if (!containerRef) return;

        const spinnerHeight = containerRef.current.offsetParent.offsetHeight;
        const slideHeight = containerRef.current.firstChild.offsetHeight;
        const top = spinnerHeight - slideHeight;

        containerRef.current.style.top = top - props.slideTopCorrect + 'px';
    }

    /**prevSlideRef нужен только для анимации. В остальное время он скрыт*/
    return(
        <div ref={containerRef} className={container}>
            <div ref={currentSlideRef}>
                {React.Children.toArray(props.children)[props.currentPosition]}
            </div>
            
            <div ref={prevSlideRef} className={prevSlideStyle}>
                {
                    prevPosition === undefined ?
                        null
                        : React.Children.toArray(props.children)[prevPosition]
                }
            </div>
        </div>
    );
}

export default Slider;

Slider.defaultProps = {
    slideTopCorrect: 0,
    currentPosition: 0,
    duration: 800
};