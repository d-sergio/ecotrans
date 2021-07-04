import getVisible from "../../mechanics/get-visible";
import handleTouchEvents from "../handle-touch-events";
import setNewPosition from '../../mechanics/set-new-position';
import searchInertialPosition from '../../new-position/search-inertial-position';

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
        callback: calcInertialMotion,
        disableScrollingOn: params.disableScrollingOn,
        event: e
    }
    
    if (carousel !== null && viewport !== null){
        return touchHandlerProperties;
    } else {
        console.log(`Slider. configureTouchHandler(): configureTouchHandler() не будет выполнен. refs: viewport is ${viewport}, carousel is ${carousel}`);
    }

    function calcInertialMotion(speed) {
        const inertialParams = {
            speed: speed,
            friction: params.friction,
            treshold: params.treshold,
            duration: params.duration,
            carousel: carousel,
            viewport: viewport,
            currentPosition: state.currentPosition,
            adjacentCorrect: adjacentCorrect
        };

        //получить новую позицию и время анимации
        const newPosition = searchInertialPosition(inertialParams);
    
        animDuration.current = newPosition.animDuration;
    
        setNewPosition(newPosition.newPosition, state, setState, params, viewport, carousel);
    }
}

export default touchHandler;