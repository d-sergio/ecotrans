import React, { useRef, useState } from 'react';
import {container} from './spinner.module.css';
import Slider from './slider';
import Wall from './wall';
import Thumbnails from './thumbnails';
import Controls from './controls';

/**Spinner
 * Описание смотри в spinner-readme.txt
 */
function Spinner(props) {
    const containerRef = useRef(null);

    const [state, setState] = useState(
        {
            currentPosition: 0,
            outside: false
        }
    );

    /**Быстрый доступ к children, предназначенным для Thumbnails */
    function getThumbnailsChildren() {
        return getChildrenArray(0);
    }

    /**Быстрый доступ к children, предназначенным для Slider */
    function getSliderChildren() {
        return getChildrenArray(1);
    }

    /**Двумерный массив props.children разделяется на два одномерных:
     * 1. из маленьких карточек по index 0
     * 2. из больших карточек по index 1
     */
    function getChildrenArray(index) {
        const children = React.Children.toArray(props.children);

        let newChildren = [];

        for (let i = 0; i < children.length; i++) {
            if (children[i].key.includes(`:${index}`)) newChildren.push(children[i]);
        }

        return newChildren;
    }

    /**Не выходит ли предполагаемая позиция estimatedPosition за пределы
     * массива? Если это так, то корректирка и инверсия анимации. Прокрутка
     * зацикливается*/
    function setNewPosition(shift) {

        const estimatedPosition = state.currentPosition + shift;
        const childrenLength = props.children.length;


        if (estimatedPosition >= childrenLength) {

            setState(
                {
                    ...state,
                    currentPosition: estimatedPosition - childrenLength,
                    outside: true
                }
            );

            return;

        } else if (estimatedPosition < 0) {
            
            setState(
                {
                    ...state,
                    currentPosition: childrenLength - 1,
                    outside: true
                }
            );

            return;

        } else {

            setState(
                {
                    ...state,
                    currentPosition: estimatedPosition,
                    outside: false
                }
            );

            return;
        }
    }

    return(
        <div ref={containerRef} className={container}>
            <Thumbnails
            currentPosition={state.currentPosition}
            outside={state.outside}
            radius={props.radius}
            thumbsTopCorrect={30}
            defaultAngle={3.5}
            duration={props.duration}>
                {getThumbnailsChildren()}    
            </Thumbnails>

            <Wall/>

            <Slider
            currentPosition={state.currentPosition}
            slideTopCorrect={30}
            duration={props.duration}>
                {getSliderChildren()}
            </Slider>

            <Controls
            prev={props.prev}
            next={props.next}
            setNewPosition={setNewPosition}
            radius={props.radius}
            nextTopCorrect={150}
            nextLeftCorrect={24}
            prevTopCorrect={150}
            prevLeftCorrect={24}
            />
        </div>
    );
}

export default Spinner;

Spinner.defaultProps={
    prev: <div>Влево</div>,
    next: <div>Вправо</div>,
    radius: 410,
    slideTopCorrect: 0,
    thumbsTopCorrect: 0,
    duration: 300
}