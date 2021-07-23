import React, { useEffect, useRef } from 'react';
import {container, circleStyle, thumbsStyle, wrapThumbStyle} from './thumbnails.module.css';
import circlePic from '../../../../../static/images/spinner/circle.svg';

function Thumbnails(props) {
    const thumbsRef = useRef(null);
    const containerRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
        setThumbsBlockSizes();
        setThumbsCoords();
    }, []);

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
            /*начало с  2.5 * fi, чтобы текущая карточка оказалась наверху*/
            const angle = 2.5 * fi + fi * i;

            thumbs[i].style.left = radius * Math.cos(angle) + radius + 'px';
            thumbs[i].style.top = radius * Math.sin(angle) + radius + props.thumbsTopCorrect + 'px';
        }

    }

    function setThumbsBlockSizes() {
        if (!circleRef.current || !thumbsRef.current) return;

        const thumbs = thumbsRef.current.children;

        thumbsRef.current.style.width = 2 * props.radius + thumbs[0].offsetWidth + 'px';
        thumbsRef.current.style.height = 2 * props.radius + thumbs[0].offsetHeight + 'px';
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

        return wrapped;
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
    thumbsTopCorrect: 0
}