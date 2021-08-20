import getVisible from "../../mechanics/get-visible";
import handleTouchEvents from "../handle-touch-events";
import setNewPosition from '../../mechanics/set-new-position';
import findNewPosition from '../../find-position/find-new-position';

function touchHandler(touchArgs) {
    const touchHandlerProperties = configureTouchHandler(touchArgs);
    handleTouchEvents(touchHandlerProperties);
}

function configureTouchHandler({e, params, state, setState, viewport, carousel, animate, animDuration, adjacentCorrect, autoMoveOff}) {
    /*Листать карусель есть смысл только, если число слайдов превышает ширину
    слайдера. Проверим это. */
    
    /*для getVisible */
    const visibleArgs = {
        visible: params.visible,
        viewport: viewport,
        carousel: carousel
    };

    const numberOfVisible = getVisible(visibleArgs);
    const carouselLength = state.children.length;


    if (carouselLength < numberOfVisible) {
        return;
    }

    if (animate) {
        animate.cancel();
    }

    /*Возвращает аргументы для обработчика */
    const touchHandlerProperties = {
        carousel: carousel,
        viewport: viewport,
        callback: calcNewPosition,
        disablePageScroll: params.disablePageScroll,
        disableSliderScroll: params.disableSliderScroll,
        event: e,
        autoMoveOff: autoMoveOff
    }
    
    if (carousel !== null && viewport !== null){
        return touchHandlerProperties;
    }

    /**Расчёт новой позиции, когда пользователь завершит прокрутку карусели */
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