import React, { useState } from 'react';
import {container, thumbnailsStyle, controlStyle, prev, next} from './spinner.module.css';
import Slider from './slider';
import Wall from './wall';

/**Spinner
 * 
 * Props:
 * children принимает как двумерный массив соответствующих друг другу миниатюрок
 * и слайдов.
 * 
 * <Spinner>
 *  [
 *      [thumbnail1, slide1],
 *      [thumbnail2, slide2],
 *      [thumbnail3, slide3],
 *  ]
 * </Spinner>
 * 
 * prev - кнопка к предыдущему слайду
 * next - кнопка к следующему слайду
 */
function Spinner(props) {
    const [currentPosition, setCurrentPosition] = useState(0);

    /**Быстрый доступ к children, предназначенным для Spinner */
    function getThumbnailsChildren() {
        return getChildrenArray(0);
    }

    function getSliderChildren() {
        return getChildrenArray(1);
    }

    /**Двумерный массив props.children разделяется на два одномерных:
     * 1. из маленьких карточек по index 0
     * 2. из больших карточек по index 1
     */
    function getChildrenArray(index) {
        const children = getChildren();

        let newChildren = [];

        for (let i = 0; i < children.length; i++) {
            if (children[i].key.includes(`:${index}`)) newChildren.push(children[i]);
        }

        return newChildren;
    }

    function setNewPosition(shift) {
        const newPosition = calcNewPosition(currentPosition + shift);
        setCurrentPosition(newPosition);

        /**Прокрутка слайдов зацикливается*/
        function calcNewPosition(estimatedPosition) {
            const childrenLength = getChildren().length / 2;

            /*Не выходит ли предполагаемая позиция estimatedPosition за пределы
            массива? Корректирка, если это так */
            if (estimatedPosition >= childrenLength) {
                return (estimatedPosition - childrenLength);
            } else if (estimatedPosition < 0) {
                return (childrenLength - 1);
            } else {
                return estimatedPosition;
            }
        }
    }

    /**Немного уменьшит количество символов, когда нужен
     * доступ к плоскому массиву children */
    function getChildren() {
        return React.Children.toArray(props.children);
    }

    return(
        <div className={container}>
            <div className={thumbnailsStyle}></div>

            <Wall/>

            <Slider currentPosition={currentPosition}>
                {getSliderChildren()}
            </Slider>

            <div className={controlStyle}>

                <div
                className={prev}
                onClick={() => setNewPosition(-1)}>

                    {props.prev}

                </div>

                <div
                className={next}
                onClick={() => setNewPosition(1)}>

                    {props.next}

                </div>
            </div>
        </div>
    );
}

export default Spinner;

Spinner.defaultProps={
    prev: <div>Влево</div>,
    next: <div>Вправо</div>
}