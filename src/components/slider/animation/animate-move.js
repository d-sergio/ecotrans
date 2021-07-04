import createAnimation from './create-animation';

/**Анимировать движение слайдера*/
function animateMove(params, state, carousel, animate, animDuration) {
    if (animate) {
        animate.cancel();
    }

    /*Если слайдеру передан callback, то после завершения анимации ему
    передаётся текущая позиция. До завершения анимации этого делать
    не следует, так как родительский компонент может вызывать повторный
    рендер слайдера из-за коллбэка, что в свою очередь прервёт анимацию.*/

    const callBackIsDefined = (params.callback !== undefined
    && params.callback !== null
    && state.prevPosition !== state.currentPosition);

    const animationProps = {
        currentPosition: state.currentPosition,
        carousel: carousel,
        animDuration: animDuration,
        callback: callBackIsDefined
                    ? () => params.callback(state.currentPosition)
                    : undefined
    };

    animate = createAnimation(animationProps);
    animate.start();

    animDuration = 0;  //Сброс. Без анимации.
}

export default animateMove;