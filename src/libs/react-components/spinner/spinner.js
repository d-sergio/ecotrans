import React, { useRef, useState } from 'react';
import {container} from './spinner.module.css';
import Slider from './slider';
import Wall from './wall';
import Thumbnails from './thumbnails';
import Controls from './controls';

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
 * radius - радиус окружности с миниатюрами
 * prev - кнопка к предыдущему слайду
 * next - кнопка к следующему слайду
 * 
 * slideTopCorrect - сдвиг слайдера вниз от обычной позиции в px
 * thumbsTopCorrect - сдвиг миниатюр вниз от обычной позиции в px
 * slideTopCorrect и thumbsTopCorrect полезны, если надо, например, оставить
 * место для теней от элементов. Иначе они могут быть скрыты за границами блока
 */
function Spinner(props) {
    const containerRef = useRef(null);

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
            const childrenLength = props.children.length;

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
        <div ref={containerRef} className={container}>
            <Thumbnails
            radius={props.radius}
            thumbsTopCorrect={30}>
                {getThumbnailsChildren()}    
            </Thumbnails>

            <Wall/>

            <Slider
            currentPosition={currentPosition}
            slideTopCorrect={30}>
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
    thumbsTopCorrect: 0
}