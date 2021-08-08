import Animation from '../../../animate/animate';
import BatchControl from '../../../animate/batch-control';
import changeStyleProperty from '../../../animate/draw-functions/change-style-property';
import sliderTimeFunction from '../../../animate/time-functions/slider-time-functions';

function animateOpen({popupRef, animate, duration}) {
    if (!popupRef.current) return;

    if (animate.current) animate.current.cancel();

    const background = popupRef.current
    background.style.display = 'flex';
    background.style.opacity = 0;

    const popupContent = popupRef.current.firstChild;
    popupContent.style.opacity = 0;
    popupContent.style.marginTop = '50%';

    /*Фон меняет прозрачность от 0 до 1 */
    const backgroundProps = {
        timing: sliderTimeFunction.straight,
        duration: duration,
        draw: changeStyleProperty,
        element: background,
        property: 'opacity',
        startValue: 0,
        finalValue: 1
    };

    /*Контент двигается снизу вверх */
    const popupMove = {
        timing: sliderTimeFunction.inverted,
        duration: duration,
        draw: changeStyleProperty,
        element: popupContent,
        property: 'marginTop',
        startValue: 50,
        finalValue: 0,
        units: '%'
    };

    /*Контент меняет прозрачность от 0 до 1*/
    const popupOpacity = {
        timing: sliderTimeFunction.straight,
        duration: duration,
        draw: changeStyleProperty,
        element: popupContent,
        property: 'opacity',
        startValue: 0,
        finalValue: 1
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

export default animateOpen;