import React from 'react';
import { slideStyle } from './slides.module.css';

/**Стандартный рендер слайдов:
 * @1 Взять только нужные слайды
 * @2 Создать каждому слайду обёртку
 * 
 * Args:
 * 
 * @param {function} setSlides - колбэк, которому отдаются слайды
 * @param {Array} children - массив всех слайдов
 * @param {object} props - в пропс должны быть currentPosition и visible
*/
function createSlides(setSlides, props) {
    /*сколько слайдов отрисовывать за пределами viewport слева и справа от него*/
    const additionalSlides = 1;

    /*индексы первого и последнего слайдов для отрисовки */
    const firstSlideIndex = props.currentPosition - additionalSlides;
    const lastSlideIndex = props.currentPosition + props.visible + additionalSlides;

    const referenceArray = createReferenceArray(props);
    const leftArray = createLeftArray(referenceArray, firstSlideIndex);
    const rightArray = createRightArray(referenceArray, lastSlideIndex);
    const viewportArray = createViewportArray(referenceArray, firstSlideIndex, lastSlideIndex);
    const renderArray = leftArray.concat(viewportArray, rightArray);

    const wrappedSlides = renderArray.map( item => ( //@2
        <div className={slideStyle}>
            {item}
        </div>
    ));

    setSlides(wrappedSlides);
}

/**Создаётся массив слайдов, от которого дальше будет строиться рендер.
 * 
 * Слайды должны, как минимум, заполнять весь viewport. Если это не так (их
 * меньше, чем visible), то надо вернуть кратно увеличенный массив children.
 * Иначе возвращается массив из props.children.
 */
function createReferenceArray(props) {
    const children = React.Children.toArray(props.children);

    if (children.length >= props.visible) {

        return children;

    } else { /*Кратно увеличивается children */

        const fillFactor = Math.ceil(props.visible / children.length);
        let referenceArray = [];

        for (let i = 0; i < fillFactor; i++) {
            referenceArray = referenceArray.concat(children);
        }

        return referenceArray;
    }
}

function createLeftArray(referenceArray, firstSlideIndex) {

    return firstSlideIndex >= 0 ? [] : referenceArray.slice(firstSlideIndex);
}

function createRightArray(referenceArray, lastSlideIndex) {
    
    return lastSlideIndex < referenceArray.length ?
        [] : referenceArray.slice(0, lastSlideIndex - referenceArray.length + 1);
}

function createViewportArray(referenceArray, firstSlideIndex, lastSlideIndex) {
    const from = firstSlideIndex < 0 ? 0 : firstSlideIndex;

    const to = lastSlideIndex >= referenceArray.length ?
        referenceArray.length : lastSlideIndex;

    return referenceArray.slice(from, to);
}

export default createSlides;