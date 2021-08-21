import createAnimation from './create-animation';

/**Анимировать движение слайдера*/
function animateMove({params, state, carousel, animate, animDuration, adjacentCorrect, callback}) {
    if (!animate) return;

    if (animate.current) {
        animate.current.cancel();
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
        animDuration: animDuration.current,
        adjacentCorrect: adjacentCorrect,
        callback: callBackIsDefined
                    ? () => params.callback(state.currentPosition)
                    : undefined
    };

    animate.current = createAnimation(animationProps);
    animate.current.start();

    animDuration.current = 0;  //Сброс. Без анимации.
}

export default animateMove;