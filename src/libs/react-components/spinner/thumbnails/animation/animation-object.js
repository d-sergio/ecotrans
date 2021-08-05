import Animation from '../../../../animate/animate';
import changeTransformRotate from '../../../../animate/draw-functions/spinner-transform-rotate';
import sliderTimeFunction from '../../../../animate/time-functions/slider-time-functions';

/**Быстрое создание объекта анимации по шаблону
 * @param {node} element - анимируемый элемент
 * @param {number} startValue - начальное значение
 * @param {number} finalValue - финальное значение
 * @param {number} duration - длительность анимации
 * 
 * Чтобы увеличить угол поворота
 * const obj = new AnimationObject(element, startValue, finalValue, duration).increaseAngle();
 * 
 * Чтобы уменьшить угол поворота
 * const obj = new AnimationObject(element, startValue, finalValue, duration).decreaseAngle();
 * 
 * Дальше работа с объектом, как с Animation (смотри описание в animate.js)
 */
class AnimationObject{
    constructor(element, startValue, finalValue, duration, callback) {
        this.element = element;
        this.startValue = startValue;
        this.finalValue = finalValue;
        this.duration = duration;
        this.callback = callback;
    }

    increaseAngle() {
        const animationProps = {
            timing: sliderTimeFunction.straight,
            duration: this.duration,
            draw: changeTransformRotate,
            element: this.element,
            startValue: this.startValue,
            finalValue: this.finalValue,
            callback: this.callback
        };

        return new Animation(animationProps);
    }

    decreaseAngle() {
        const animationProps = {
            timing: sliderTimeFunction.inverted,
            duration: this.duration,
            draw: changeTransformRotate,
            element: this.element,
            startValue: this.startValue,
            finalValue: this.finalValue,
            callback: this.callback
        };

        return new Animation(animationProps);
    }
}

export default AnimationObject;