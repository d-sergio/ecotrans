import {Animation, sliderDraw, invertedSliderDraw, changeTransformRotate} from '../../../../animate/animate';

/**Быстрое создание объекта анимации по шаблону
 * element - анимируемый элемент
 * startValue - начальное значение
 * finalValue - финальное значение
 * duration - длительность анимации
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
            timing: sliderDraw,
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
            timing: invertedSliderDraw,
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