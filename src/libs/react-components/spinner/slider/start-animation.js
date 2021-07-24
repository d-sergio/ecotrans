import {Animation, changeStyleProperty, sliderDraw, invertedSliderDraw, changeTransformScale}
from '../../../animate/animate';
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
        timing: sliderDraw,
        duration: props.duration,
        draw: changeTransformScale,
        element: currentSlideRef.current,
        startValue: 0,
        finalValue: 1
    };

    const currentOpacity = {
        timing: sliderDraw,
        duration: props.duration,
        draw: changeStyleProperty,
        element: currentSlideRef.current,
        property: 'opacity',
        startValue: 0,
        finalValue: 1
    }

    const prevTransform = {
        timing: invertedSliderDraw,
        duration: props.duration,
        draw: changeTransformScale,
        element: prevSlideRef.current,
        startValue: 1,
        finalValue: 0
    };

    const prevOpacity = {
        timing: invertedSliderDraw,
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