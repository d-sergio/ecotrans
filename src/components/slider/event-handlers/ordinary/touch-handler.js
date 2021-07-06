import getVisible from "../../mechanics/get-visible";
import handleTouchEvents from "../handle-touch-events";
import setNewPosition from '../../mechanics/set-new-position';
import findNewPosition from '../../find-position/find-new-position';

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
    
        const positionArgs = {
            params: params,
            state: state,
            setState: setState,
            viewport: viewport,
            carousel: carousel,
            destination: newPosition
        };

        setNewPosition(positionArgs);
    }
}

export default touchHandler;