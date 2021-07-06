import getVisible from "../../mechanics/get-visible";
import handleTouchEvents from "../handle-touch-events";
import setNewPosition from '../../mechanics/set-new-position';
import findInertialPosition from '../../find-position/find-inertial-position';

function touchHandler(touchArgs) {
    const touchHandlerProperties = configureTouchHandler(touchArgs);
    handleTouchEvents(touchHandlerProperties);
}

function configureTouchHandler({e, params, state, setState, viewport, carousel, animate, animDuration, adjacentCorrect}) {
    const visibleArgs = {
        visible: params.visible,
        viewport: viewport,
        carousel: carousel
    };

    const numberOfVisible = getVisible(visibleArgs);
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
        const newPosition = findInertialPosition(inertialParams);
    
        animDuration.current = newPosition.animDuration;

        const positionArgs = {
            params: params,
            state: state,
            setState: setState,
            viewport: viewport,
            carousel: carousel,
            destination: newPosition.newPosition
        };
    
        setNewPosition(positionArgs);
    }
}

export default touchHandler;