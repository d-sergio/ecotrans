/**Не используется. Возможно, будет удалён */

import React from 'react';
import getVisible from "../get-visible";

/**Создать видимые слайды*/
function createVisibleSlides(children, currentPosition, visible, viewport, carousel, slideStyle) {
    const numberOfVisible = getVisible(visible, viewport, carousel);
    
    const from = currentPosition;   //с какого слайда показываем
    const to = currentPosition + numberOfVisible;   //до какого

    const carouselLength = children.length;
    const visibleSlides = [];

    //Перебираем видимую часть массива и создаём слайды
    for (let i = from; i < to; i++) {
        let number = i;

        //Зацикливание, если позиция оказалась за допустимыми пределами
        if (i >= carouselLength) number = i - carouselLength;

        let slide =
            <div className={slideStyle}>
                {children[number]}
            </div>;

        visibleSlides.push(slide);
    }

    return visibleSlides;
}

export default createVisibleSlides;