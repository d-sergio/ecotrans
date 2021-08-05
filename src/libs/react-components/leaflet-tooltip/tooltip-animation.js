import Animation from '../../animate/animate';
import sliderTimeFunction from '../../animate/time-functions/slider-time-functions';
import BatchControl from '../../animate/batch-control';
import changeStyleProperty from '../../animate/draw-functions/change-style-property';

function turnOn(
        {
            back,
            tooltipMobile,
            tooltipDesktop,
            mobileDevice,
            animate,
            props
        }
    ) {
    
    if (!tooltipDesktop.current || !tooltipMobile.current || !back.current) return;
    
    if (animate.current) animate.current.cancel();
    animate.current = undefined;

    //Включить подсказку
    back.current.style.display = 'block';

    if (mobileDevice.current) {
        tooltipMobile.current.style.display = 'flex';

        //Если предыдущая анимация прервана, сбросим значения на всякий случай
        tooltipDesktop.current.style.display = 'none';
        tooltipDesktop.current.style.opacity = 0;
    } else {
        tooltipDesktop.current.style.display = 'flex';

        //Если предыдущая анимация прервана, сбросим значения на всякий случай
        tooltipMobile.current.style.display = 'none';
        tooltipMobile.current.style.opacity = 0;
    }

    //Анимировать появление подсказки
    const propsBack = {
        timing: sliderTimeFunction.straight,
        duration: props.duration,
        draw: changeStyleProperty,
        element: back.current,
        property: 'opacity',
        startValue: 0,
        finalValue: props.backOpacity
    };

    const propsTooltip = {
        timing: sliderTimeFunction.straight,
        duration: props.duration,
        draw: changeStyleProperty,
        element: mobileDevice.current ? tooltipMobile.current : tooltipDesktop.current,
        property: 'opacity',
        startValue: 0,
        finalValue: props.textOpacity
    };

    startAnimation({propsBack, propsTooltip, animate});
}

function turnOff(
    {
        back,
        tooltipMobile,
        tooltipDesktop,
        animate,
        props
    }
) {
    if (!tooltipDesktop.current || !tooltipMobile.current || !back.current) return;

    //Колбэки установят display: "none" для всех элементов подсказки
    const hideBack = () => {
        if (!back.current) return;

        back.current.style.display = 'none';
    };

    const hideDesktopTooltip = () => {
        if (!tooltipDesktop.current) return;

        tooltipDesktop.current.style.display = 'none';
    };

    const hideMobileTooltip = () => {
        if (!tooltipMobile.current) return;

        tooltipMobile.current.style.display = 'none';
    };

    if (animate.current) animate.current.cancel();
    animate.current = undefined;

    /*Надо знать точно какой из вариантов подсказки активирован,
    чтобы его убрать. Так как к планшету может быть подключена
    мышь и пользователь может их использовать одновременно,
    что приведёт к некорректной анимации*/
    const mobileIsActive = tooltipMobile.current.style.display !== 'none' ? true : false;

    //Если предыдущая анимация прервана, сбросим значения на всякий случай
    if (mobileIsActive) {
        tooltipDesktop.current.style.display = 'none';
        tooltipDesktop.current.style.opacity = 0;
    } else {
        tooltipMobile.current.style.display = 'none';
        tooltipMobile.current.style.opacity = 0;
    }

    //Анимировать исчезновение подсказки
    const propsBack = {
        timing: sliderTimeFunction.inverted,
        duration: props.duration,
        draw: changeStyleProperty,
        element: back.current,
        property: 'opacity',
        startValue: props.backOpacity,
        finalValue: 0,
        callback: hideBack
    };

    const propsTooltip = {
        timing: sliderTimeFunction.inverted,
        duration: props.duration,
        draw: changeStyleProperty,
        element: mobileIsActive ? tooltipMobile.current : tooltipDesktop.current,
        property: 'opacity',
        startValue: props.textOpacity,
        finalValue: 0,
        callback: mobileIsActive ? hideMobileTooltip : hideDesktopTooltip
    };

    startAnimation({propsBack, propsTooltip, animate});
}

/**Запустить анимацию */
function startAnimation({propsBack, propsTooltip, animate}) {
    const animateBack = new Animation(propsBack);
    const animateTooltip = new Animation(propsTooltip);

    animate.current = new BatchControl([animateBack, animateTooltip]);

    animate.current.start();
}

const animation = {
    turnOn,
    turnOff
}

export default animation;