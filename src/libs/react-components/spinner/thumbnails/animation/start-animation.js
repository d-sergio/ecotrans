import AnimationObject from './animation-object';
import BatchControl from '../../../../animate/batch-control';

function startAnimation({circleRef, thumbsRef, props, prevPosition, animate, duration}) {
    if (!circleRef.current || !thumbsRef.current) return;

    if (animate.current) animate.current.cancel();

    //угол поворота на одну позицию
    const fi = 360 / props.children.length;

    const startAngle = calcStartAngle();
    const finalAngle = calcFinalAngle();

    animate.current = createAnimationBatch();
    animate.current.start();

    /**С какого угла начинается поворот
     * 
     * //1 - поворот в пределах children.length
     * 
     * //2 - листая обратно,
     * вернулись от index0 к последней миниатюре ...8, 9 <- 0, 1, 2...
     * 
     * //3 - листая вперёд, от последней миниатюры вернулись к первой
     * ...8, 9 -> 0, 1, 2...
     * В этом случае сначала установится отрицательное значение поворота
     * для circleRef и thumbsRef (для миниатюр - положительное), чтобы движение
     * было в положительную сторону
    */
    function calcStartAngle() {
        if (!props.outside) {    //1

            return prevPosition * fi;

        } else if (props.outside && props.currentPosition > prevPosition) { //2

            return prevPosition * fi;

        } else if (props.outside && props.currentPosition < prevPosition) { //3
            
            return (prevPosition - props.children.length) * fi;
        }
    }

    /**До какого угла поворачиваем. Отталкивается от предыдущего угла поворота
     * //1 - поворот в пределах children.length 
     * 
     * //2 - листая обратно,
     * вернулись от index0 к последней миниатюре ...8, 9 <- 0, 1, 2...
     * 
     * //3 - листая вперёд, от последней миниатюры вернулись к первой
     * ...8, 9 -> 0, 1, 2...
     * В этом случае сначала установится отрицательное значение поворота
     * для circleRef и thumbsRef (для миниатюр - положительное), чтобы движение
     * было в положительную сторону
     */
    function calcFinalAngle() {
        if (!props.outside) {    //1

            return props.currentPosition * fi;

        } else if (props.outside && props.currentPosition > prevPosition) { //2

            return (prevPosition + props.children.length - props.currentPosition) * fi;

        } else if (props.outside && props.currentPosition < prevPosition) {//3

            return props.currentPosition * fi;

        }
    } 

    /**Создать объект для управления всеми анимациями
     * thumbsAnimation - блок миниатюр
     * thumbsItemsAnimation - миниатюры, отдельно каждая
     * circleAnimation - изображение окружности
    */
    function createAnimationBatch() {
        const thumbsAnimation = createAnimationObject(thumbsRef.current);
        const circleAnimation = createAnimationObject(circleRef.current);
        const thumbsItemsAnimation = createItemsAnimation(thumbsRef.current);

        const animationBatch = new BatchControl([thumbsAnimation, circleAnimation, ...thumbsItemsAnimation])

        return animationBatch;
    }

    /**Создать объект анимации для одного элемента thumbsRef или circleRef
     * increaseAngle - повернуть против часовой стрелки (вперёд)
     * decreaseAngle - повернуть по часовой стрелке (назад)
     * 
     * callback возвращает значение угла поворота к положительному
     * (всегда от 0 до 360deg)
    */
    function createAnimationObject(element) {
        const callback = props.outside && props.currentPosition > prevPosition ?
            () => {element.style.transform = `rotate(${props.currentPosition * fi}deg)`}
            : undefined;

        const animationObject = new AnimationObject(element, startAngle, finalAngle, duration, callback);

        if (props.currentPosition > prevPosition && !props.outside) {
            return animationObject.increaseAngle();

        } else if (props.currentPosition < prevPosition && !props.outside) {
            return animationObject.decreaseAngle();

        } if (props.currentPosition > prevPosition && props.outside) {
            return animationObject.decreaseAngle();

        } else if (props.currentPosition < prevPosition && props.outside) {
            return animationObject.increaseAngle();

        } else {
            return animationObject.decreaseAngle();
        }
    }

    /**Создать массив анимаций для каждой миниатюры */
    function createItemsAnimation(element) {
        const items = element.children;

        let itemsAnimation = [];

        for (let i = 0; i < items.length; i++) {
            
            const animation = createInvertedAnimation(items[i]);

            itemsAnimation.push(animation);
        }

        return itemsAnimation;
    }

    /**Каждая миниатюра поворачивается в противоположную сторону от
     * thumbsRef или circleRef, чтобы быть правильно ориентированными.
     * 
     * callback возвращает значение угла поворота к отрицательному
     * (всегда от -360 до 0deg)*/
    function createInvertedAnimation(element) {
        const callback = props.outside && props.currentPosition > prevPosition ?
        () => {element.style.transform = `rotate(${- props.currentPosition * fi}deg)`}
        : undefined;

        const animationObject = finalAngle >= 0 ?
            new AnimationObject(element, - startAngle, - finalAngle, duration, callback)
            : new AnimationObject(element, - startAngle, finalAngle, duration, callback);

        if (props.currentPosition < prevPosition && !props.outside) {
            return animationObject.increaseAngle();

        } else if (props.currentPosition < prevPosition && !props.outside) {
            return animationObject.decreaseAngle();

        } else if (props.currentPosition < prevPosition && props.outside) {
            return animationObject.decreaseAngle();

        } else if (props.currentPosition > prevPosition && props.outside) {
            return animationObject.increaseAngle();

        } else {
            return animationObject.decreaseAngle();
        }
    }
}

export default startAnimation;