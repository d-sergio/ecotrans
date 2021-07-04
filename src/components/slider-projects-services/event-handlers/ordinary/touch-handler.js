import getVisible from "../../mechanics/get-visible";
import handleTouchEvents from "../inertial/handle-touch-events";
import setNewPosition from '../../mechanics/set-new-position';
import searchNewPosition from '../../new-position/search-new-position';

function touchHandler(e, params, state, setState, viewport, carousel, animate, animDuration) {
    const touchHandlerProperties = configureTouchHandler(e, params, state, setState, viewport, carousel, animate, animDuration);
    handleTouchEvents(touchHandlerProperties);
}

function configureTouchHandler(e, params, state, setState, viewport, carousel, animate, animDuration) {
    const numberOfVisible = getVisible(params.visible, viewport, carousel);
    const carouselLength = state.children.length;

    /*листать карусель есть смысл только, если число слайдов превышает ширину
    слайдера */
    if (carouselLength < numberOfVisible) {
        return;
    }

    if (animate) {
        animate.cancel();
    }

    const touchHandlerProperties = {
        carousel: carousel,
        viewport: viewport,
        callback: calcNewPosition,
        disableScrollingOn: params.disableScrollingOn,
        event: e
    }
    
    if (carousel !== null && viewport !== null){
        return touchHandlerProperties;
    } else {
        console.log(`Slider. touchHandler(): sliderTouchHandler() не будет выполнен. refs: viewport is ${viewport}, carousel is ${carousel}`);
    }

    function calcNewPosition(speed) {
        const inertialParams = {
            speed: speed,
            treshold: params.treshold,
            carousel: carousel,
            currentPosition: state.currentPosition
        };

        //получить новую позицию и время анимации
        const newPosition = searchNewPosition(inertialParams);
    
        animDuration.current = params.duration;
    
        setNewPosition(newPosition, state, setState, params, viewport, carousel);
    }
}

export default touchHandler;