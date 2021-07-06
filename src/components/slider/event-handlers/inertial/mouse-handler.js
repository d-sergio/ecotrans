import getVisible from '../../mechanics/get-visible';
import setNewPosition from '../../mechanics/set-new-position';
import findInertialPosition from '../../find-position/find-inertial-position';
import handleMouseEvents from '../handle-mouse-events';

function mouseHandler(e, params, state, setState, viewport, carousel, animate, animDuration, adjacentCorrect) {
    const mouseHandlerProperties = configureMouseHandler(e, params, state, setState, viewport, carousel, animate, animDuration, adjacentCorrect);
    handleMouseEvents(mouseHandlerProperties);
}

function configureMouseHandler(e, params, state, setState, viewport, carousel, animate, animDuration, adjacentCorrect) {
    const visibleArgs = {
        visible: params.visible,
        viewport: viewport,
        carousel: carousel
    };

    const numberOFvisible = getVisible(visibleArgs);
    const carouselLength = state.children.length;
    
    /*листать карусель есть смысл только, если число слайдов превышает ширину
    слайдера */
    if (carouselLength < numberOFvisible) {
        return;
    }

    if (animate) {
        animate.cancel();
    }

    const mouseHandlerProperties = {
        carousel: carousel,
        viewport: viewport,
        callback: calcInertialMotion,
        event: e
    }
    
    if (carousel !== null && viewport !== null){
        return mouseHandlerProperties;
    } else {
        console.log(`Slider. configureMouseHandler(): configureMouseHandler() не будет выполнен. refs: viewport is ${viewport}, carousel is ${carousel}`);
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

export default mouseHandler;