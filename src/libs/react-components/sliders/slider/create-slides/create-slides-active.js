import React from 'react';
import getVisible from '../mechanics/get-visible';

/**Рендер слайдов с подсветкой во время автопрокрутки
 * Передаёт в центральный (относительно viewport) слайд пропс active={true}.
 * Так слайд узнаёт, что он должен изменить своё состояние.
*/
function createSlidesActive({children, currentPosition, autoMove, slideStyle, viewport, carousel, visible}) {
    let slides = [];
    const numberOfVisible = getVisible({viewport, carousel, visible});
    const highlight = Math.ceil(numberOfVisible / 2);

    for (let i = 0; i < children.length; i++) {
        const active = autoMove && i === currentPosition + highlight - 1 ? true : false;

        /*overflow: 'visible' чтобы при transform: scale() содержимое slide
        не обрезалось*/
        let slide = (
            <div style={{overflow: 'visible'}} className={slideStyle}>
                {React.cloneElement(children[i], {active: active})}
            </div>);

        slides.push(slide);
    }

    return slides;
}

export default createSlidesActive;