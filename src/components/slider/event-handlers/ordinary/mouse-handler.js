import getVisible from '../../mechanics/get-visible';
import setNewPosition from '../../mechanics/set-new-position';
import searchNewPosition from '../../new-position/search-new-position';
import handleMouseEvents from '../inertial/handle-mouse-events';

function mouseHandler(e, params, state, setState, viewport, carousel, animate, animDuration) {
    const mouseHandlerProperties = configureMouseHandler(e, params, state, setState, viewport, carousel, animate, animDuration);
    handleMouseEvents(mouseHandlerProperties);
}

function configureMouseHandler(e, params, state, setState, viewport, carousel, animate, animDuration) {
    const numberOFvisible = getVisible(params.visible, viewport, carousel);
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
        callback: calcNewPosition,
        event: e
    }
    
    if (carousel !== null && viewport !== null){
        return mouseHandlerProperties;
    } else {
        console.log(`Slider. configureMouseHandler(): configureMouseHandler() не будет выполнен. refs: viewport is ${viewport}, carousel is ${carousel}`);
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

export default mouseHandler;