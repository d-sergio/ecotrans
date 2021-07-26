import AnimationObject from './animation-object';
import BatchControl from '../../../../animate/batch-control';
import getTransformRotate from '../../../../get-transform-rotate';

/** Подробности смотри в start-animation-readme.txt */

function startAnimation({circleRef, thumbsRef, props, prevPosition, animate, duration, minusAngle}) {
    if (!circleRef.current || !thumbsRef.current || prevPosition === undefined) return;

    //@1
    const actualAngle = animate.current ? animate.current.animations[0].actualValue : 0;

    if (animate.current) animate.current.cancel();

    //угол поворота на одну позицию
    const fi = 360 / props.children.length;

    const startAngle = calcStartAngle();
    const finalAngle = calcFinalAngle();

    animate.current = createAnimationBatch();
    animate.current.start();

    /**С какого угла начинается поворот*/
    function calcStartAngle() {
        if (!props.outside) {    //#1

            //@3
            if (actualAngle < 0 && minusAngle.current) {
                return actualAngle;
            }

            minusAngle.current = false;

            return getTransformRotate(thumbsRef.current);
            //return prevPosition * fi;

        } else if (props.outside && props.currentPosition > prevPosition) { //#2

            minusAngle.current = false;

            return getTransformRotate(thumbsRef.current);
            //return prevPosition * fi;

        } else if (props.outside && props.currentPosition < prevPosition) { //#3

            minusAngle.current = true;  //@2

            return getTransformRotate(thumbsRef.current) - 360;
            //return (prevPosition - props.children.length) * fi;
        }
    }

    /**До какого угла поворачиваем. Отталкивается от предыдущего угла поворота*/
    function calcFinalAngle() {
        if (!props.outside) {    //#1

            return props.currentPosition * fi;

        } else if (props.currentPosition > prevPosition && props.outside) { //#2

            return (props.currentPosition - prevPosition - props.children.length) * fi;

        } else if (props.currentPosition < prevPosition && props.outside) {//#3

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

        const animationBatch = new BatchControl([thumbsAnimation, circleAnimation, ...thumbsItemsAnimation]);

        return animationBatch;
    }

    /**Создать объект анимации для одного элемента thumbsRef или circleRef
     * increaseAngle - повернуть против часовой стрелки (вперёд)
     * decreaseAngle - повернуть по часовой стрелке (назад)
     * 
     * callback возвращает значение угла поворота к положительному
     * (всегда от 0 до 360deg)
     * */
    function createAnimationObject(element) {
        /*Если будут какие-то баги, колбэк, как минимум, гарантирует, что
        миниатюры остановятся там, где надо*/
        const resetTransform = () => element.style.transform = `rotate(${props.currentPosition * fi}deg)`;

        const animationObject = new AnimationObject(element, startAngle, finalAngle, duration, resetTransform);

        if (props.currentPosition > prevPosition && !props.outside) {   //#1
            return animationObject.increaseAngle();

        } else if (props.currentPosition < prevPosition && !props.outside) {    //#1
            return animationObject.decreaseAngle();

        } if (props.currentPosition > prevPosition && props.outside) {  //#2
            return animationObject.decreaseAngle();

        } else if (props.currentPosition < prevPosition && props.outside) { //#3
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
     * (всегда от -360 до 0deg)
     * */
    function createInvertedAnimation(element) {
        /*Если будут какие-то баги, колбэк, как минимум, гарантирует, что
        миниатюры остановятся там, где надо. А в случае #3 возвращает угол
        каждой из них к отрицательному значению*/
        const resetTransform = () => element.style.transform = `rotate(${- props.currentPosition * fi}deg)`;

        const animationObject = finalAngle < 0 ?
            new AnimationObject(element, - startAngle, - finalAngle, duration, resetTransform)
            : new AnimationObject(element, - startAngle, - finalAngle, duration, resetTransform);

        if (props.currentPosition < prevPosition && !props.outside) {   //#1
            return animationObject.increaseAngle();

        } else if (props.currentPosition > prevPosition && !props.outside) {    //#1
            return animationObject.decreaseAngle();

        } else if (props.currentPosition > prevPosition && props.outside) { //#2
            return animationObject.increaseAngle();

        } else if (props.currentPosition < prevPosition && props.outside) { //#3
            return animationObject.decreaseAngle();

        } else {
            return animationObject.decreaseAngle();
        }
    }
}

export default startAnimation;