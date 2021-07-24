import React, { useEffect, useRef } from 'react';
import {container} from './slider.module.css';

/**Слайдер в центре
 * 
 * Props:
 * currentPosition - текущая позиция
 * slideTopCorrect - сдвиг слайдера вниз от обычной позиции в px
 * duration - длительность анимации
*/
function Slider(props) {
    const containerRef = useRef(null);

    useEffect(() => setSlideCoords(), []);

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

    return(
        <div ref={containerRef} className={container}>
            {React.Children.toArray(props.children)[props.currentPosition]}
        </div>
    );
}

export default Slider;

Slider.defaultProps = {
    slideTopCorrect: 0,
    currentPosition: 0,
    duration: 10
};