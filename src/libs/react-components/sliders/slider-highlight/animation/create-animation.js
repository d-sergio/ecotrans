//Используется в animate-move.js

import Animation from "../../../../animate/animate";
import changeStyleProperty from '../../../../animate/draw-functions/change-style-property';
import sliderTimeFunction from '../../../../animate/time-functions/slider-time-functions';

/**Создать и вернуть объект анимации
 * 
 * Функция "ловит" текущий currentMarginLeft ленты слайдов и создаёт объект
 * анимации для прокрутки до currentPosition(новой позиции). Для этого
 * вычисляется targetMarginLeft.
 * 
 * Props:
 *  @param {object} - объект со следующими полями:
 *      @param {number} currentPosition - текущая позиция, до которой происходит прокрутка
 *      @param {node} carousel - лента слайдов
 *      @param {function} callback - необязательный коллбэк выполнится после анимации
 *      @param {number} animDuration - длительность анимации
 */
export default function createAnimationObject({animDuration, carousel, callback, currentPosition, adjacentCorrect}) {
    try{
        if (!carousel) return;
        
        const slideWidth = carousel.children[0].offsetWidth;

        const currentMarginLeft = parseFloat(window.getComputedStyle(carousel).marginLeft);
        const targetMarginLeft = -currentPosition * slideWidth + adjacentCorrect;

        const timing = (targetMarginLeft < currentMarginLeft)
                        ? sliderTimeFunction.inverted //если листаем к следующему слайду
                        : sliderTimeFunction.straight; //если листаем к предыдущему слайду

        const animationProps = {
            timing: timing,
            duration: animDuration,
            draw: changeStyleProperty,
            element: carousel,
            property: 'marginLeft',
            startValue: currentMarginLeft,
            finalValue: targetMarginLeft,
            units: 'px',
            callback: callback
        }

        return new Animation(animationProps);
    } catch(e) {
        console.log('Slider Ошибка createAnimationObject(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}