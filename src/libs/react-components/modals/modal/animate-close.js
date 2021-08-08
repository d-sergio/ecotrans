import Animation from '../../../animate/animate';
import BatchControl from '../../../animate/batch-control';
import changeStyleProperty from '../../../animate/draw-functions/change-style-property';
import sliderTimeFunction from '../../../animate/time-functions/slider-time-functions';

const marginTop = 20;

function animateClose({modalRef, animate, duration}) {
    if (!modalRef.current) return;

    if (animate.current) animate.current.cancel();

    const background = modalRef.current;

    const modalContent = modalRef.current.firstChild;

    const backgroundCallback = () => {
        background.style.display = 'none';
    };

    /*Фон меняет прозрачность от 1 до 0 */
    const backgroundProps = {
        timing: sliderTimeFunction.inverted,
        duration: duration,
        draw: changeStyleProperty,
        element: modalRef.current,
        property: 'opacity',
        startValue: 1,
        finalValue: 0,
        callback: backgroundCallback
    };

    /*Контент двигается снизу вверх */
    const modalMove = {
        timing: sliderTimeFunction.inverted,
        duration: duration,
        draw: changeStyleProperty,
        element: modalContent,
        property: 'marginTop',
        startValue: 0,
        finalValue: -marginTop,
        units: '%'
    };

    /*Контент меняет прозрачность от 1 до 0*/
    const modalOpacity = {
        timing: sliderTimeFunction.inverted,
        duration: duration,
        draw: changeStyleProperty,
        element: modalContent,
        property: 'opacity',
        startValue: 1,
        finalValue: 0
    };

    const animateBackground = new Animation(backgroundProps);
    const animateMove = new Animation(modalMove);
    const animateOpacity = new Animation(modalOpacity);

    const animateBatch = [
        animateBackground,
        animateMove,
        animateOpacity
    ];

    animate.current = new BatchControl(animateBatch);
    animate.current.start();
}

export default animateClose;