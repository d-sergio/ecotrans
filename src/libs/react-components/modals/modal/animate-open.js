import Animation from '../../../animate/animate';
import BatchControl from '../../../animate/batch-control';
import changeStyleProperty from '../../../animate/draw-functions/change-style-property';
import sliderTimeFunction from '../../../animate/time-functions/slider-time-functions';

const marginTop = 20;

function animateOpen({modalRef, animate, duration}) {
    if (!modalRef.current) return;

    if (animate.current) animate.current.cancel();

    const background = modalRef.current
    background.style.display = 'flex';
    background.style.opacity = 0;

    const modalContent = modalRef.current.firstChild;
    modalContent.style.opacity = 0;
    modalContent.style.marginTop = `${marginTop}%`;

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
    const modalMove = {
        timing: sliderTimeFunction.inverted,
        duration: duration,
        draw: changeStyleProperty,
        element: modalContent,
        property: 'marginTop',
        startValue: marginTop,
        finalValue: 0,
        units: '%'
    };

    /*Контент меняет прозрачность от 0 до 1*/
    const modalOpacity = {
        timing: sliderTimeFunction.straight,
        duration: duration,
        draw: changeStyleProperty,
        element: modalContent,
        property: 'opacity',
        startValue: 0,
        finalValue: 1
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

export default animateOpen;