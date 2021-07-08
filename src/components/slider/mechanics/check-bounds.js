import getVisible from "./get-visible";

function checkBounds({state, setState, visible, viewport, carousel, animDuration}){
    const numberOfVisible = getVisible({visible, viewport, carousel});
    const carouselLength = state.children.length;

    //корректировка не требуется, если число карточек не превышает ширину слайдера
    if (carouselLength < numberOfVisible) {
        return;
    }

    if (state.currentPosition > (carouselLength - numberOfVisible) ) {
        animDuration.current = 0;  //без анимации

        setState({
            ...state,
            currentPosition: (carouselLength - numberOfVisible)
        });
    }
}

export default checkBounds;