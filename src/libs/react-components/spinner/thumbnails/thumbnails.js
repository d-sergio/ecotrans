import React, { useEffect, useRef } from 'react';
import {container, circleStyle, thumbsStyle, wrapThumbStyle} from './thumbnails.module.css';
import circlePic from '../../../../../static/images/spinner/circle.svg';
import usePrevious from '../../../react/react-hooks/use-previous-hook';
import getTransformRotate from '../../../get-transform-style';

/**Миниатюры
 * 
 * Props:
 * radius - радиус окружности с миниатюрами
 * thumbsTopCorrect - сдвиг миниатюр вниз от обычной позиции в px
 * angleFactor - на сколько позиций повернуть круг миниатюр по умолчанию
 * по часовой стрелке. Например, для 10 миниатюр можно установить значение
 * 3.5, чтобы первый элемент оказался наверху
 */
function Thumbnails(props) {
    const thumbsRef = useRef(null);
    const containerRef = useRef(null);
    const circleRef = useRef(null);

    const prevPosition = usePrevious(props.currentPosition);

    useEffect(() => {
        setThumbsBlockSizes();
        setThumbsCoords();
    }, [props.children]);
    
    useEffect(() => animateMove(), [props.currentPosition]);

    function animateMove() {
        if (!circleRef.current || !thumbsRef.current) return;

        const angle = 360 / props.children.length;

        const shift = props.currentPosition - prevPosition;

        const currentAngle = prevPosition * angle;
        const targetAngle = currentAngle + shift * angle;

        thumbsRef.current.style.transform = `rotate(${targetAngle}deg)`;
        circleRef.current.style.transform = `rotate(${targetAngle}deg)`;

        /*Поворот миниатюр в обратную сторону*/
        const thumbs = thumbsRef.current.children;

        for (let i = 0; i < thumbs.length; i++) {
            thumbs[i].style.transform = `rotate(${- targetAngle}deg)`;
        }
    }

    /**Координаты миниатюр задаются относительно самого блока*/
    function setThumbsCoords() {
        if (!thumbsRef.current) return;        

        /*
            radius - радиус окружности
            fi - угол между соседними миниатюрами
        */
        const radius = props.radius;
        const fi = Math.PI * 2 / props.children.length;

        const thumbs = thumbsRef.current.children;

        /*Задаём координаты по окружности */
        for (let i = 0; i < thumbs.length; i++) {
            const angle = props.angleFactor * fi + fi * i;

            thumbs[i].style.left = radius * Math.cos(angle) + radius + 'px';
            thumbs[i].style.top = radius * Math.sin(angle) + radius + 'px';
        }

    }

    /**Размеры и позиция окружности circleRef и миниатюр thumbsRef*/
    function setThumbsBlockSizes() {
        if (!circleRef.current || !thumbsRef.current) return;

        const thumbs = thumbsRef.current.children;

        thumbsRef.current.style.width = 2 * props.radius + thumbs[0].offsetWidth + 'px';
        thumbsRef.current.style.height = 2 * props.radius + thumbs[0].offsetHeight + 'px';
        thumbsRef.current.style.top = props.thumbsTopCorrect + 'px';

        circleRef.current.style.top = thumbs[0].offsetWidth / 2 + props.thumbsTopCorrect + 'px';
        circleRef.current.style.width = 2 * props.radius + 'px';
        circleRef.current.style.height = 2 * props.radius + 'px';
    }

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
    angleFactor: 0
}