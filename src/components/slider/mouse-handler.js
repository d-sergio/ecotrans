import getVisible from './get-visible';
import setNewPosition from './set-new-position';
import searchInertialPosition from './search-inertial-position';
import sliderMouseHandler from './mouse-events-for-sliders';

function mouseHandler(e, params, state, setState, viewport, carousel, animate, animDuration) {
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
        callback: calcInertialMotion,
        event: e
    }
    
    if (carousel !== null && viewport !== null){
        sliderMouseHandler(mouseHandlerProperties);
    } else {
        console.log(`Slider. mouseHandler(): sliderMouseHandler() не будет выполнен. refs: viewport is ${viewport}, carousel is ${carousel}`);
    }

    function calcInertialMotion(speed) {
        const inertialParams = {
            speed: speed,
            friction: params.friction,
            treshold: params.treshold,
            duration: params.duration,
            carousel: carousel,
            viewport: viewport,
            currentPosition: state.currentPosition
        };

        //получить новую позицию и время анимации
        const newPosition = searchInertialPosition(inertialParams);
    
        animDuration.current = newPosition.animDuration;
    
        setNewPosition(newPosition.newPosition, state, setState, params, viewport, carousel);
    }
}

export default mouseHandler;