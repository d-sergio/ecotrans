import React, { useEffect, useRef } from 'react';
import {container, prevSlideStyle} from './slider.module.css';
import usePrevious from '../../../react/react-hooks/use-previous-hook';
import startAnimation from './start-animation';

/**Слайдер в центре
 * 
 * Props:
 * @param {number} currentPosition - текущая позиция
 * @param {number} slideTopCorrect - сдвиг слайдера вниз от обычной позиции в px
 * @param {number} duration - длительность анимации
*/
function Slider(props) {
    const containerRef = useRef(null);
    const prevSlideRef = useRef(null);
    const currentSlideRef = useRef(null);
    const animate = useRef(undefined); //здесь будут объекты анимации

    const prevPosition = usePrevious(props.currentPosition);

    useEffect(() => setSlideCoords(), []);

    useEffect(() => {
        startAnimation({prevSlideRef, currentSlideRef, prevPosition, animate, props})
    },
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

    /**Стили текущего слайда устанавливаются на рендере. Если их менять перед
     * анимацией, то это будет заметно.
    */
    function getCurrentSlideStyle() {
        //Первый рендер. Просто показывается первый слайд
        const init = {
            opacity: 1,
            transform: 'scale(1, 1)'
        };

        //Перед анимацией
        const beforeAnimate = {
            opacity: 0,
            transform: 'scale(0, 0)'
        };

        //Если есть предыдущий слайд, значит рендер не первый и требуется анимация
        const style = prevPosition ? beforeAnimate : init;

        return style;
    }

    /**prevSlideRef заранее получает display: 'block'. Если предыдущего слайда
     * нет, то всё равно ничего не показывается внутри него.
     * 
     * Перед анимацией все стили определены в style и назначены key. Раньше
     * стили менялись непосредственно перед анимацией, но это вызывало заметное
     * мелькание слайдов.
     * */
    return(
        <div ref={containerRef} className={container}>
            <div
                key={props.currentPosition}
                style={getCurrentSlideStyle()}
                ref={currentSlideRef}>

                {React.Children.toArray(props.children)[props.currentPosition]}
            </div>
            
            <div
                key={props.currentPosition + 10}
                style={{display: 'block'}}
                ref={prevSlideRef}
                className={prevSlideStyle}>

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