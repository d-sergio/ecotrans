import React, { useEffect, useRef, useState } from 'react';
import {container} from './scroll-up.module.css';
import Animation from '../../animate/animate';
import timeFunc from '../../animate/time-functions/slider-time-functions';
import changeJsProperty from '../../animate/draw-functions/change-js-property';
import getDocumentHeight from '../../get-document-height';
import throttle from '../../throttle';

/**Кнопка прокрутки в начало страницы */
function ScrollUp(props) {
    const throttling = 100;
    const buttonRef = useRef(null);
    const mounted = useRef();
    const animateScroll = useRef(); //здесь будет объект анимации

    const [left, setLeft] = useState( calcLeft() + 'px' );
    const [bottom, setBottom] = useState(0);

    useEffect(() => initCalcCords(), []);
    useEffect(() => setBottom(props.bottom), []);

    const throttleSetCoords = throttle(setCoords, throttling);

    /**Инициализация координат кнопки */
    function initCalcCords() {
        if (typeof window === undefined) return;

        mounted.current = true;

        window.addEventListener('scroll', throttleSetCoords);
        window.addEventListener('resize', throttleSetCoords);

        //ждём, когда загрузятся шрифты
        document.fonts.ready.then(() => setCoords());

        return () => {
            if (typeof window === undefined) return;

            mounted.current = false;

            window.removeEventListener('scroll', throttleSetCoords);
            window.removeEventListener('resize', throttleSetCoords);
        }
    }

    /**Установить координаты кнопки*/
    function setCoords() {
        if (!mounted.current) return;

        const x = calcLeft();
        const y = calcBottom();

        setLeft(x);
        setBottom(y);
    }

    /**Посчитать отступ кнопки от нижней границы окна */
    function calcBottom() {
        if (typeof window === undefined) return;

        const contVisibleHeight = calcVisibleHeight();

        if (contVisibleHeight < document.documentElement.clientHeight) {
            //const y = document.documentElement.clientHeight - contVisibleHeight;
            const y = window.visualViewport.height - contVisibleHeight;

            return y + props.end + 'px';

        } else {

            return props.bottom;
        }
    }
    
    /**Посчитать отступ кнопки от левой границы окна */
    function calcLeft() {
        if (!buttonRef.current || typeof window === undefined) return 0;

        const docWidth = window.innerWidth;
        const buttonWidth = buttonRef.current.offsetWidth;

        if (window.innerWidth > props.contentWidth) {
            
            const paddings = docWidth - props.contentWidth;

            const x = docWidth - props.shiftX - buttonWidth - paddings / 2;

            return x + 'px';

        } else if (window.innerWidth <= props.contentWidth) {

            const x = docWidth - props.shiftX - buttonWidth;

            return x + 'px';
        }
    }

    /**Высота видимой части контента =
     * высота контента - прокрутка документа - высота кнопки
    */
    function calcVisibleHeight() {
        if (typeof window === undefined) return;

        const footer = document.getElementsByTagName('footer')[0];

        const docHeight = getDocumentHeight();
        const docScroll = window.pageYOffset;
        const footerHeight = footer.scrollHeight;

        const contVisibleHeight = docHeight - footerHeight - docScroll;

        return contVisibleHeight;
    }

    /**Прокрутка наверх */
    function scrollTop() {
        if (animateScroll.current) animateScroll.current.cancel();

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
        
        animateScroll.current = new Animation(animProps);
        animateScroll.current.start();
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
    end: 0,
    duration: 500,
    contentWidth: 1440,
    shiftX: 20
};