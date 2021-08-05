import React, { useEffect, useRef, useState } from 'react';
import {button} from './scroll-up.module.css';
import Animation from '../../animate/animate';
import timeFunc from '../../animate/time-functions/slider-time-functions';
import changeJsProperty from '../../animate/draw-functions/change-js-property';

/**Кнопка прокрутки в начало страницы */
function ScrollUp(props) {
    const containerRef = useRef(null);
    const buttonRef = useRef(null);
    const animate = useRef(); //здесь будет объект анимации

    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => initButtonCoords(), []);
    useEffect(() => initCalcCords(), []);

    function initButtonCoords() {
        setLeft(props.left);
        setTop(props.top);
    }

    function initCalcCords() {
        document.addEventListener('scroll', setCoords);

        return () => document.removeEventListener('scroll', setCoords);
    }

    function setCoords() {
        const contVisibleHeight = calcVisibleHeight();

        //setLeft(containerRight + props.left + 'px');

        if (contVisibleHeight < document.documentElement.clientHeight) {

            setTop(contVisibleHeight + props.end + 'px');

        } else {

            setTop(props.top);
        }
    }

    /**Высота видимой части контента =
     * высота контента - прокрутка документа - высота кнопки
    */
    function calcVisibleHeight() {
        if (!containerRef.current || !buttonRef.current || typeof window === undefined) return;

        const buttonHeight = buttonRef.current.offsetHeight;

        const contHeight = containerRef.current.scrollHeight;
        const docScroll = window.pageYOffset;
        const contVisibleHeight = contHeight - docScroll - buttonHeight;

        return contVisibleHeight;
    }

    /**Прокрутка наверх */
    function scrollTop() {
        if (animate.current) animate.current.cancel();

        const currentScroll = document.documentElement.scrollTop;

        const animProps = {
            timing: timeFunc.inverted,
            duration: props.duration,
            draw: changeJsProperty,
            element: document.documentElement,
            property: 'scrollTop',
            startValue: currentScroll,
            finalValue: 0,
            units: ''
        }
        
        animate.current = new Animation(animProps);
        animate.current.start();
    }

    return (
        <div ref={containerRef}>
            <div
                style={{left: left, top: top}}
                ref={buttonRef}
                className={props.className || button}
                onClick={scrollTop}
            >
                {props.button}
            </div>
            {props.children}            
        </div>
    );
}

export default ScrollUp;

ScrollUp.defaultProps = {
    left: 0,
    top: 0,
    end: 0,
    duration: 500
};