function getPixelRatio() {
    try{
        console.log(window.devicePixelRatio);
        return window.devicePixelRatio;
    } catch(e) {
        /*Защита для build */
    }
}

const defaultProps = {
    initPosition: 0,
    visible: 1,
    adjacent: false,
    freeze: false,
    prev: null,
    next: null,
    duration: 500,
    treshold: 0.2,
    friction: 5,
    disablePageScroll: 0.0606 * getPixelRatio(),
    autoMove: false,
    cancelAutoMove: false,
    moveInterval: 3000,
    callback: undefined
}

export default defaultProps;

//disablePageScroll: 0.0606,