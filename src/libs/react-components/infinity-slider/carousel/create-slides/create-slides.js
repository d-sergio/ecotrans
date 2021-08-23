import React from 'react';
import { slideStyle } from './carousel.module.css';

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
function createSlides(setSlides, children, props) {
    const firstSlideIndex = props.currentPosition;
    const lastSlideIndex = props.currentPosition + props.visible;

    const slidesToCreate = children.slice(firstSlideIndex, lastSlideIndex); //@1

    const wrappedSlides = slidesToCreate.map( item => ( //@2
        <div className={slideStyle}>
            {item}
        </div>
    ));

    setSlides(wrappedSlides);
}

export default createSlides;