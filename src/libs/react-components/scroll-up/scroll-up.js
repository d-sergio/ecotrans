import React, { useEffect, useRef, useState } from 'react';
import {container} from './scroll-up.module.css';
import Animation from '../../animate/animate';
import timeFunc from '../../animate/time-functions/slider-time-functions';
import changeJsProperty from '../../animate/draw-functions/change-js-property';
import getDocumentHeight from '../../common/get-document-height';
import throttle from '../../common/throttle';

/**Кнопка прокрутки в начало страницы
 * 
 * Props:
 * @param {Node} button - внешний вид кнопки
 * @param {number} contentWidth - ширина контента (px), центрированного по ширине
 * страницы. Кнопа размещается внутри, рядом с правой границей контента.
 * По умолчнаю 1440.
 * @param {number} shiftX - сдвиг относительно положения по умолчанию в пикселях.
 * Значение > 0 сдвигает кнопку влево.
 * @param {String} bottom - расположение кнопки относительно нижней части окна.
 * Надо указать единицы измерения. Например: bottom='30px', buttom='10%'
 * @param {number} end - когда страница прокручена до конца, кнопка ложится на
 * футер. Положительное значение end сдвинет кнопку выше от футера на указаннное
 * число пикселей
 * @param {number} duration - длительность (мс) анимации прокрутки наверх.
 * По умолчаню 500.
 * @param {number} throttle - минимальное время (мс) между рассчётами позиции кнопки,
 * чтобы уменьшить нагрузку на браузер (100 по умолчанию)
 * @param {number} show - на сколько надо прокрутить страницу вниз относительно
 * высоты окна, чтобы появилась кнопка. От 0 до 1. Например:
 * show={0.3} - кнопка появится при прокрутке равной 30% от высоты окна
 * 
 * Использование см. в readme.txt
 */
function ScrollUp(props) {
    const buttonRef = useRef(null);
    const mounted = useRef();
    const animateScroll = useRef(); //здесь будет объект анимации

    const [left, setLeft] = useState( calcLeft() + 'px' );
    const [bottom, setBottom] = useState('-100px');

    useEffect(() => initCalcCords(), []);
    useEffect(() => setBottom(props.bottom), []);

    const throttleSetCoords = throttle(setCoords, props.throttle);

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
        if (typeof window === undefined || !buttonRef.current) return;

        const contVisibleHeight = calcVisibleHeight();

        //не все браузеры поддерживают window.visualViewport
        const windowHeight = window.visualViewport ?
        window.visualViewport.height
        : document.documentElement.clientHeight; 

        if (document.documentElement.scrollTop < windowHeight * props.show) {
            return (-buttonRef.current.offsetHeight + 'px');
        }

        if (contVisibleHeight < document.documentElement.clientHeight) {

            const y = windowHeight - contVisibleHeight;

            return y + props.end + 'px';

        } else {

            return props.bottom;
        }
    }
    
    /**Посчитать отступ кнопки от левой границы окна */
    function calcLeft() {
        if (!buttonRef.current || typeof window === undefined) return 0;

        const windowWidth = window.innerWidth;
        const buttonWidth = buttonRef.current.offsetWidth;

        if (window.innerWidth > props.contentWidth) {
            
            const paddings = windowWidth - props.contentWidth;

            const x = windowWidth - props.shiftX - buttonWidth - paddings / 2;

            return x + 'px';

        } else if (window.innerWidth <= props.contentWidth) {

            const x = windowWidth - props.shiftX - buttonWidth;

            return x + 'px';
        }
    }

    /**Высота видимой части контента =
     * высота контента - прокрутка документа - высота футера
    */
    function calcVisibleHeight() {
        if (typeof window === undefined) return;

        const footer = document.getElementsByTagName('footer')[0];

        const footerHeight = footer ? footer.scrollHeight : 0;

        const docHeight = getDocumentHeight();
        const docScroll = window.pageYOffset;        

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
    bottom: '0px',
    end: 0,
    duration: 500,
    contentWidth: 1440,
    shiftX: 0,
    throttle: 100,
    show: 0.3
};