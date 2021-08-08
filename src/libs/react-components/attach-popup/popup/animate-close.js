import Animation from '../../../animate/animate';
import BatchControl from '../../../animate/batch-control';
import changeStyleProperty from '../../../animate/draw-functions/change-style-property';
import sliderTimeFunction from '../../../animate/time-functions/slider-time-functions';

function animateClose({popupRef, animate, duration}) {
    if (!popupRef.current) return;

    if (animate.current) animate.current.cancel();

    const background = popupRef.current;

    const popupContent = popupRef.current.firstChild;

    const backgroundCallback = () => {
        background.style.display = 'none';
    };

    /*Фон меняет прозрачность от 1 до 0 */
    const backgroundProps = {
        timing: sliderTimeFunction.inverted,
        duration: duration,
        draw: changeStyleProperty,
        element: popupRef.current,
        property: 'opacity',
        startValue: 1,
        finalValue: 0,
        callback: backgroundCallback
    };

    /*Контент двигается снизу вверх */
    const popupMove = {
        timing: sliderTimeFunction.inverted,
        duration: duration,
        draw: changeStyleProperty,
        element: popupContent,
        property: 'marginTop',
        startValue: 0,
        finalValue: -50,
        units: '%'
    };

    /*Контент меняет прозрачность от 1 до 0*/
    const popupOpacity = {
        timing: sliderTimeFunction.inverted,
        duration: duration,
        draw: changeStyleProperty,
        element: popupContent,
        property: 'opacity',
        startValue: 1,
        finalValue: 0
    };

    const animateBackground = new Animation(backgroundProps);
    const animateMove = new Animation(popupMove);
    const animateOpacity = new Animation(popupOpacity);

    const animateBatch = [
        animateBackground,
        animateMove,
        animateOpacity
    ];

    animate.current = new BatchControl(animateBatch);
    animate.current.start();
}

export default animateClose;