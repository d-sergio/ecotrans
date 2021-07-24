import React, { useEffect, useRef } from 'react';
import {container, circleStyle, thumbsStyle, wrapThumbStyle} from './thumbnails.module.css';
import circlePic from '../../../../../static/images/spinner/circle.svg';
import usePrevious from '../../../react/react-hooks/use-previous-hook';
import startAnimation from './animation/start-animation';
import createThumbsCircle from './mechanics/create-thumbs-circle';
import setBlockSizes from './mechanics/set-block-sizes';

/**Миниатюры
 * 
 * Props:
 * radius - радиус окружности с миниатюрами
 * duration - длительность анимации
 * thumbsTopCorrect - сдвиг миниатюр вниз от обычной позиции в px
 * defaultAngle - на сколько позиций повернуть круг миниатюр по умолчанию
 * по часовой стрелке. Например, для 10 миниатюр можно установить значение
 * 3.5, чтобы первый элемент оказался наверху
 * outside - true, если в Spinner произошёл выход за пределы children.length
 * (подробнее смотри описание state.outside в spinner-readme.txt)
 */
function Thumbnails(props) {
    const thumbsRef = useRef(null);
    const containerRef = useRef(null);
    const circleRef = useRef(null);
    const animate = useRef(undefined); //Здесь будут объекты анимации

    const prevPosition = usePrevious(props.currentPosition);

    useEffect(() => {
        setBlockSizes({circleRef, thumbsRef, props});
        createThumbsCircle({thumbsRef, props});
    }, [props.children]);
    
    useEffect(() => startAnimation(
        {
            circleRef: circleRef,
            thumbsRef: thumbsRef,
            props: props,
            prevPosition: prevPosition,
            animate: animate,
            duration: props.duration
        }
    ), [props.currentPosition]);

    /**Каждая миниатюра оборачивается в div с абсолютным позиционированием */
    function wrapThumbs() {
        const wrapped = React.Children.map(
            props.children,
            thumb => <div className={wrapThumbStyle}>{thumb}</div>
        );

        /*возвращается инвертированный массив, так как вращение в обратную сторону*/
        return wrapped.reverse();   
    }

    return(
        <div ref={containerRef} className={container}>
            <img ref={circleRef} className={circleStyle} src={circlePic} alt="circle"/>

            <div ref={thumbsRef} className={thumbsStyle}>
                {wrapThumbs()}
            </div>
        </div>
    );
}

export default Thumbnails;

Thumbnails.defaultProps = {
    radius: 410,
    thumbsTopCorrect: 0,
    defaultAngle: 0,
    duration: 800,
    outside: false
}