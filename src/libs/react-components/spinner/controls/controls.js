import React, { useEffect, useRef } from 'react';
import {controlStyle, prev, next} from './controls.module.css';

/**Кнопки управления Spinner
 * 
 * Props
 * 
 * radius - радиус окружности с миниатюрами
 * setNewPosition - коллбэк, изменяющий текущую позицию
 * nextTopCorrect - сдвиг кнопки next вниз от позиции по умолчанию
 * nextLeftCorrect - сдвиг кнопки next влево от позиции по умолчанию
 * prevTopCorrect - сдвиг кнопки prev вниз от позиции по умолчанию
 * prevLeftCorrect - сдвиг кнопки prev влево от позиции по умолчанию
*/
function Controls(props) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => setButtonsCoords(), []);

    function setButtonsCoords() {
        if (!prevRef || !nextRef) return;

        nextRef.current.style.top = props.radius + props.nextTopCorrect + 'px';
        nextRef.current.style.left = props.radius - props.nextLeftCorrect + 'px';

        prevRef.current.style.top = props.radius + props.prevTopCorrect + 'px';
        prevRef.current.style.left = - props.radius - props.prevLeftCorrect + 'px';
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
    prevLeftCorrect: 0
};