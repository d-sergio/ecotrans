import {Animation, sliderDraw, invertedSliderDraw, changeTransformRotate} from '../../../animate/animate';

class InitAnimation{
    constructor(element, startValue, finalValue) {
        this.element = element;
        this.startValue = startValue;
        this.finalValue = finalValue;
    }

    increaseAngle() {
        const animationProps = {
            timing: sliderDraw,
            duration: 500,
            draw: changeTransformRotate,
            element: element,
            startValue: startValue,
            finalValue: finalValue
        };

        return new Animation(animationProps);
    }

    decreaseAngle() {
        const animationProps = {
            timing: invertedSliderDraw,
            duration: 500,
            draw: changeTransformRotate,
            element: element,
            startValue: startValue,
            finalValue: finalValue
        };

        return new Animation(animationProps);
    }
}

export default InitAnimation;