import React from 'react';
import getVisible from '../../slider/mechanics/get-visible';

/**Рендер слайдов с подсветкой во время автопрокрутки
 * Передаёт в центральный (относительно viewport) слайд пропс active={true}.
 * Так слайд узнаёт, что он должен изменить своё состояние. Подсветка
 * включена всегда, в отличие от create-slides-active.js
 * 
 * Кроме того, на предыдущий и следующий слайд вешаются обработчики onClick
 * для перехода к ним по клику
*/
function createAlwaysActive({children, currentPosition, slideStyle, viewport, carousel, visible, buttonHandler}) {
    let slides = [];
    const numberOfVisible = getVisible({viewport, carousel, visible});
    const highlight = Math.ceil(numberOfVisible / 2);

    for (let i = 0; i < children.length; i++) {
        const active = i === currentPosition + highlight - 1 ? true : false;

        let onClick = null;

        if (i === currentPosition + highlight - 2) onClick = () => buttonHandler(-1);
        if (i === currentPosition + highlight) onClick = () => buttonHandler(1);

        /*overflow: 'visible' чтобы при transform: scale() содержимое slide
        не обрезалось*/
        let slide = (
            <div
                onClick={onClick}
                style={{overflow: 'visible'}}
                className={slideStyle}
            >
                {React.cloneElement(children[i], {active: active})}
            </div>);

        slides.push(slide);
    }

    return slides;
}

export default createAlwaysActive;