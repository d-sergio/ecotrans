import React, { useEffect, useRef, useState } from 'react';
import {container} from './scroll-up.module.css';
import Animation from '../../animate/animate';
import timeFunc from '../../animate/time-functions/slider-time-functions';
import changeJsProperty from '../../animate/draw-functions/change-js-property';
import getDocumentHeight from '../../get-document-height';
import throttle from '../../throttle';

/**Кнопка прокрутки в начало страницы */
function ScrollUp(props) {
    const throttling = 300;
    const buttonRef = useRef(null);
    const animate = useRef(); //здесь будет объект анимации

    const [left, setLeft] = useState( calcLeft() + 'px' );
    const [bottom, setBottom] = useState(0);

    useEffect(() => initCalcCords(), []);
    useEffect(() => setBottom(props.bottom), []);

    const throttleSetCoords = throttle(setCoords, throttling);

    function initCalcCords() {
        if (typeof window === undefined) return;

        window.addEventListener('scroll', setCoords);
        window.addEventListener('resize', throttleSetCoords);

        setCoords();

        return () => {
            if (typeof window === undefined) return;

            window.removeEventListener('scroll', setCoords);
            window.removeEventListener('resize', throttleSetCoords);
        }
    }

    function setCoords() {
        const contVisibleHeight = calcVisibleHeight();

        const x = calcLeft();

        setLeft(x + 'px');

        if (contVisibleHeight < document.documentElement.clientHeight) {

            const x = document.documentElement.clientHeight - contVisibleHeight;
            setBottom(x + props.end + 'px');

        } else {

            setBottom(props.bottom);
        }
    }

    function calcLeft() {
        if (!buttonRef.current || typeof window === undefined) return 0;

        const docWidth = window.innerWidth;
        const buttonWidth = buttonRef.current.offsetWidth;
        
        if (window.innerWidth > props.outside) {

            const x = docWidth / 2 + props.contentWidth / 2 + props.shiftX;

            return x;

        } else if (window.innerWidth < props.outside && window.innerWidth > props.contentWidth) {
            
            const paddings = docWidth - props.contentWidth;

            const x = docWidth - props.shiftX - buttonWidth - paddings / 2;

            return x;
        } else {

            const x = docWidth - props.shiftX - buttonWidth;

            return x;
        }
    }

    /**Высота видимой части контента =
     * высота контента - прокрутка документа - высота кнопки
    */
    function calcVisibleHeight() {
        if (!buttonRef.current || typeof window === undefined) return;

        const footer = document.getElementsByTagName('footer')[0];

        const docHeight = getDocumentHeight();
        const docScroll = window.pageYOffset;
        const footerHeight = footer.scrollHeight;
        //const buttonHeight = buttonRef.current.offsetHeight;

        const contVisibleHeight = docHeight - footerHeight - docScroll /*- buttonHeight*/;

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
        <div
            style={{left: left, bottom: bottom}}
            ref={buttonRef}
            className={container}
            
            onClick={scrollTop}
        >
            {props.button}
            
        </div>      
    );
}

export default ScrollUp;

ScrollUp.defaultProps = {
    bottom: '20px',
    end: 20,
    duration: 500,
    contentWidth: 1440,
    shiftX: 20,
    outside: 1670
};