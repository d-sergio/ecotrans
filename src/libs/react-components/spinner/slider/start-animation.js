import {Animation} from '../../../animate/animate';
import sliderTimeFunction from '../../../animate/time-functions/slider-time-functions';
import changeStyleProperty from '../../../animate/draw-functions/change-style-property';
import changeTransformScale from '../../../animate/draw-functions/change-transform-scale';
import BatchControl from '../../../animate/batch-control';

function startAnimation({prevSlideRef, currentSlideRef, prevPosition, animate, props}) {
    if (!prevSlideRef.current || !currentSlideRef.current || prevPosition === undefined) return;

    if (animate.current) animate.current.cancel();

    currentSlideRef.current.style.transform = 'scale(0, 0)';
    currentSlideRef.current.style.opacity = '0';
    prevSlideRef.current.style.transform = 'scale(1, 1)';
    prevSlideRef.current.style.opacity = '1';
    prevSlideRef.current.style.display = 'block';

    const hidePrev = () => {
        if (!prevSlideRef.current) return;

        prevSlideRef.current.style.display = 'none';
    }

    //Объекты анимации
    const currentTransform = {
        timing: sliderTimeFunction.straight,
        duration: props.duration,
        draw: changeTransformScale,
        element: currentSlideRef.current,
        startValue: 0,
        finalValue: 1
    };

    const currentOpacity = {
        timing: sliderTimeFunction.straight,
        duration: props.duration,
        draw: changeStyleProperty,
        element: currentSlideRef.current,
        property: 'opacity',
        startValue: 0,
        finalValue: 1
    }

    const prevTransform = {
        timing: sliderTimeFunction.inverted,
        duration: props.duration,
        draw: changeTransformScale,
        element: prevSlideRef.current,
        startValue: 1,
        finalValue: 0
    };

    const prevOpacity = {
        timing: sliderTimeFunction.inverted,
        duration: props.duration,
        draw: changeStyleProperty,
        element: prevSlideRef.current,
        property: 'opacity',
        startValue: 1,
        finalValue: 0,
        callback: hidePrev
    }

    animate.current = new BatchControl(
        [
            new Animation(currentTransform),
            new Animation(currentOpacity),
            new Animation(prevTransform),
            new Animation(prevOpacity)
        ]
    );

    animate.current.start();
}

export default startAnimation;