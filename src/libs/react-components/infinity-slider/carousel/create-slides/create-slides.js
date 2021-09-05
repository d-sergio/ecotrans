import React from 'react';
import { slideStyle } from './slides.module.css';

/**
 * Отрисовываются слайды, видимые внутри viewport, а также по одному слева и
 * справа за пределами viewport.
 * #1 referenceArray - из props.children создаётся массив слайдов, целиком
 * заполняющий viewport
 * #2 viewportArray - массив слайдов внутри viewport
 * #3 leftArray - если индекс первого слайда меньше нуля, то слева от viewportArray
 * добавляется массив слайдов, взятых и отсчитанных с конца referenceArray
 * [слайд 3] + [слайд0][слайд1][слайд2][слайд3]
 * #4 rightArray - если индекс последнего слайда больше длины referenceArray,
 * то справа от viewportArray добавляется массив слайдов, взятых и отсчитанных
 * с начала referenceArray
 * [слайд0][слайд1][слайд2][слайд3] + [слайд0]
 * #5 renderArray - массив, который будет отрисован получается путём слияния
 * leftArray + viewportArray + rightArray
 * 
 * [слайд 3] + [слайд0][слайд1][слайд2][слайд3] + [слайд0]
 * 
 * #6 Создаётся обёртка для каждого слайда
 * 
 * @param {function} setSlides - колбэк, которому отдаются слайды
 * @param {object} props - в пропс должны быть children, currentPosition и visible
*/
function createSlides({setSlides, props, additionalSlides}) {
    /*индексы первого и последнего слайдов для отрисовки */
    const firstSlideIndex = props.currentPosition - additionalSlides;
    const lastSlideIndex = props.currentPosition + props.visible + additionalSlides;

    const referenceArray = createReferenceArray(props); //#1
    const viewportArray = createViewportArray(referenceArray, firstSlideIndex, lastSlideIndex); //#2
    const leftArray = createLeftArray(referenceArray, firstSlideIndex); //#3
    const rightArray = createRightArray(referenceArray, lastSlideIndex);    //#4
    const renderArray = leftArray.concat(viewportArray, rightArray);    //#5

    const wrappedSlides = renderArray.map( item => ( //#6
        <div className={slideStyle}>
            {item}
        </div>
    ));

    setSlides(wrappedSlides);
}

function createReferenceArray(props) {  //#1
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

function createViewportArray(referenceArray, firstSlideIndex, lastSlideIndex) { //#2
    const from = firstSlideIndex < 0 ? 0 : firstSlideIndex;

    const to = lastSlideIndex >= referenceArray.length ?
        referenceArray.length : lastSlideIndex;

    return referenceArray.slice(from, to);
}

function createLeftArray(referenceArray, firstSlideIndex) { //#3

    return firstSlideIndex >= 0 ? [] : referenceArray.slice(firstSlideIndex);
}

function createRightArray(referenceArray, lastSlideIndex) { //#4
    
    return lastSlideIndex < referenceArray.length ?
        [] : referenceArray.slice(0, lastSlideIndex - referenceArray.length);
}

export default createSlides;