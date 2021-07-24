import React, { useEffect, useRef } from 'react';
import {controlStyle, prev, next} from './controls.module.css';

/**Кнопки управления Spinner
 * 
 * Props
 * 
 * @param {number} radius - радиус окружности с миниатюрами
 * @param {function} setNewPosition - коллбэк, изменяющий текущую позицию
 * @param {number} nextTopCorrect - сдвиг кнопки next вниз от позиции по умолчанию
 * @param {number} nextLeftCorrect - сдвиг кнопки next влево от позиции по умолчанию
 * @param {number} prevTopCorrect - сдвиг кнопки prev вниз от позиции по умолчанию
 * @param {number} prevLeftCorrect - сдвиг кнопки prev влево от позиции по умолчанию
 * @param {number} controlsPadding - когда размер родительского блока или окна становится
 * меньше ширины слайдера, кнопки управления начинают сдвигаться к центру.
 * Этот параметр позволяет сдвинуть их больше на указанное значение, чтобы
 * они не упирались в границы окна/блока
*/
function Controls(props) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => setButtonsCoords(), []);

    useEffect(() => {
        if (typeof window === undefined) return;

        window.addEventListener('resize', setButtonsCoords);

        return () => window.removeEventListener('resize', setButtonsCoords);
    }, []);

    function setButtonsCoords() {
        if (!prevRef.current || !nextRef.current) return;

        const docWidth = document.documentElement.clientWidth;
        const shift = docWidth / 2 - prevRef.current.offsetWidth / 2 - props.controlsPadding;

        nextRef.current.style.top = props.radius + props.nextTopCorrect + 'px';
        nextRef.current.style.left = Math.min(props.radius, shift) - props.nextLeftCorrect + 'px';

        prevRef.current.style.top = props.radius + props.prevTopCorrect + 'px';
        prevRef.current.style.left = - Math.min(props.radius, shift) - props.prevLeftCorrect + 'px';
    }

    return(
        <div className={controlStyle}>

            <div
            ref={prevRef}
            className={prev}
            onClick={() => props.setNewPosition(-1)}>

                {props.prev}

            </div>

            <div
            ref={nextRef}
            className={next}
            onClick={() => props.setNewPosition(1)}>

                {props.next}

            </div>
        </div>
    );
}

export default Controls;

Controls.defaultProps = {
    nextTopCorrect: 0,
    nextLeftCorrect: 0,
    prevTopCorrect: 0,
    prevLeftCorrect: 0,
    controlsPadding: 8
};