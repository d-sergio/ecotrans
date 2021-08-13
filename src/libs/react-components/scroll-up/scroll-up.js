import React, { useEffect, useRef, useState } from 'react';
import {container} from './scroll-up.module.css';
import Animation from '../../animate/animate';
import timeFunc from '../../animate/time-functions/slider-time-functions';
import changeJsProperty from '../../animate/draw-functions/change-js-property';
import getDocumentHeight from '../../common/get-document-height';
import throttle from '../../common/throttle';

/**Кнопка прокрутки в начало страницы
 * 
 * Внимание!
 * Автоматически устанавливает родительскому элементу position: relative !
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
 * @param {number} startShowing - на сколько надо прокрутить страницу вниз относительно
 * высоты окна, чтобы появилась кнопка. От 0 до 1. Например:
 * startShowing={0.3} - кнопка появится при прокрутке равной 30% от высоты окна
 * 
 * Использование см. в readme.txt
 */
function ScrollUp(props) {
    const buttonRef = useRef(null);
    const mounted = useRef();
    const animateScroll = useRef(); //здесь будет объект анимации

    const [left, setLeft] = useState( calcLeft() + 'px' );
    const [bottom, setBottom] = useState('-100px');

    useEffect(setParentRelative, []);
    useEffect(initCalcCords, []);
    useEffect(() => setBottom(props.bottom), []);

    const throttleSetCoords = throttle(setCoords, props.throttle);

    /**Установить родительскому компоненту position: relative */
    function setParentRelative() {
        if (!buttonRef.current) return;

        buttonRef.current.parentNode.style.position = 'relative';
    }

    /**Инициализация координат кнопки */
    function initCalcCords() {
        if (typeof window === undefined || !buttonRef.current) return;

        mounted.current = true;

        window.addEventListener('scroll', setCoords);
        window.addEventListener('resize', throttleSetCoords);

        //ждём, когда загрузятся шрифты
        document.fonts.ready.then(() => {
            if (!buttonRef.current) return;
            
            //Кнопка до этого момента была не видна
            buttonRef.current.style.opacity = 1;
            setCoords();
        });

        return () => {
            if (typeof window === undefined) return;

            mounted.current = false;

            window.removeEventListener('scroll', setCoords);
            window.removeEventListener('resize', throttleSetCoords);
    
        }
    }

    /**Установить координаты кнопки*/
    function setCoords() {
        if (!mounted.current) return;

        /*В мобильных, при повороте экрана, кнопка может внезапно оказаться
        за пределами контента. Поэтому предварительно сбросим left*/
        setLeft(0);

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

        /*Кнопка прячется за нижней границей экрана, так как пользователь ещё
        не достаточно прокрутил страницу */
        if (document.documentElement.scrollTop < windowHeight * props.startShowing) {
            
            buttonRef.current.style.position = 'fixed';

            return (-buttonRef.current.offsetHeight + 'px');
        }

        /*Когда прокрутка достигает футера, кнопка ложится на него */
        if (contVisibleHeight < windowHeight) {
            /*Вариант, когда position кнопки около футера absolute. Родитель кнопки
            должен иметь position: relative. */
            buttonRef.current.style.position = 'absolute';

            const lastMarginBottom = getLastMarginBottom();

            return props.end - lastMarginBottom + 'px';


            /*Вариант, когда position кнопки всегда fixed. В мобильном браузере
            кнопка может "плавать" около футера из-за панели навигации, которая
            показывается/скрывается при прокрутке страницы. Также надо
            закомментировать setParentRelative() и getLastMarginBottom(), а в 
            стилях css раскомментировать position: fixed; */

            //const y = windowHeight - contVisibleHeight;
            //return y + props.end + 'px';            

        } else {

            buttonRef.current.style.position = 'fixed';

            return props.bottom;
        }
    }

    /**Последний дочерний элемент родителя кнопки может иметь margin-bottom,
     * влияющий на положение кнопки около футера. Найдём этот margin-bottom,
     * чтобы компенсировать его потом
     */
    function getLastMarginBottom() {
        try{
            if (!buttonRef.current) return;

            //Кнопка сама может быть последним элементом своего родителя
            const lastParentChild = buttonRef.current.parentNode.lastChild === buttonRef.current ?
                buttonRef.current.previousSibling
                : buttonRef.current.parentNode.lastChild;
    
            const lastChildBottomPx = getComputedStyle(lastParentChild).marginBottom;
            const lastChildBottom = parseInt(lastChildBottomPx);
    
            return lastChildBottom;
        } catch (e) {
            
            console.log(`ScrollUp. Ошибка в getLastMarginBottom. Вернёт значение 0.`)

            return 0;
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
    end: 30,
    duration: 500,
    contentWidth: 1440,
    shiftX: 0,
    throttle: 100,
    startShowing: 0.3
};