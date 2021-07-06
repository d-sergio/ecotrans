import getVisible from "../../mechanics/get-visible";
import handleTouchEvents from "../handle-touch-events";
import setNewPosition from '../../mechanics/set-new-position';
import findNewPosition from '../../find-position/find-new-position';

function touchHandler(e, params, state, setState, viewport, carousel, animate, animDuration, adjacentCorrect) {
    const touchHandlerProperties = configureTouchHandler(e, params, state, setState, viewport, carousel, animate, animDuration, adjacentCorrect);
    handleTouchEvents(touchHandlerProperties);
}

function configureTouchHandler(e, params, state, setState, viewport, carousel, animate, animDuration, adjacentCorrect) {
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
        console.log(`Slider. configureTouchHandler(): configureTouchHandler() не будет выполнен. refs: viewport is ${viewport}, carousel is ${carousel}`);
    }

    function calcNewPosition(speed) {
        const inertialParams = {
            speed: speed,
            treshold: params.treshold,
            carousel: carousel,
            currentPosition: state.currentPosition,
            adjacentCorrect: adjacentCorrect
        };

        //получить новую позицию и время анимации
        const newPosition = findNewPosition(inertialParams);
    
        animDuration.current = params.duration;
    
        setNewPosition(newPosition, state, setState, params, viewport, carousel);
    }
}

export default touchHandler;