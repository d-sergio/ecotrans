import React, { useEffect, useRef } from 'react';
import {tooltip, tooltipBack} from './leaflet-tooltip.module.css';
import {Animation, changeStyleProperty, sliderDraw, invertedSliderDraw} from '../../animate/animate';

/**Всплывающая подсказка для карты.
 * 
 * При прокрутке сайта выводится сообщение поверх карты
 * 
 * Использование:
 * 
 * <LeafletTooltip>
 *      <LeafletMap/>
 * </LeafletTooltip>
 * 
 * Props:
 * 
 * timerOff (3000) - через сколько мс отключится подсказка
 * duration (300) - длительность анимации мс
 * textOpacity (1) - прозрачность текста подсказки
 * backOpacity (1) - прозрачность тёмной подложки
 * textMobile - текст мобильной подсказки
 *  (<p>Перемещайте карту, проводя по ней двумя пальцами<br/>(коснитесь, чтобы скрыть подсказку)</p>)
 * textDesktop - текст десктопной подсказки
 *  (<p>Меняйте масштаб карты колесом мыши, удерживая Shift<br/>(клик, чтобы скрыть подсказку)</p>)
 */

function LeafletTooltip(props) {
    const tooltipDesktop = useRef(null);
    const tooltipMobile = useRef(null);
    const back = useRef(null);
    const timer = useRef(0);    //здесь будет setTimeout
    const active = useRef(false);   //подсказка активна?
    const mobile = useRef(false);   //сенсорное устройство?
    const animateBack = useRef(undefined);  //здесь будет анимация тёмной подложки
    const animateTooltip = useRef(undefined);   //здесь будет анимация текста

    /*Chrome может вызвать событие scroll без реальной прокрутки при mousedown на карте,
    если она не центрирована в окне браузера. Тогда произойдёт лишнее появление подсказки.
    Поэтому запомним текущий scroll, чтобы потом сравнить с новым. Так станет ясно
    был ли это настоящий scroll или только лишь событие без прокрутки документа*/
    const currentScroll = useRef(document.documentElement.scrollTop);
    
    //Отключить подсказку
    useEffect(() => {
        if (!tooltipDesktop.current || !tooltipMobile.current || !back.current) return;

        tooltipDesktop.current.style.opacity = 0;
        tooltipMobile.current.style.opacity = 0;
        back.current.style.opacity = 0;

        tooltipDesktop.current.style.display = 'none';
        tooltipMobile.current.style.display = 'none';
        back.current.style.display = 'none';
    }, []);

    useEffect(() => {
        if (typeof window === undefined) return;

        window.addEventListener('scroll', tooltipOn);
        window.addEventListener('touchstart', setMobile);
        window.addEventListener('mousedown', setDesktop);
        window.addEventListener('mousemove', setDesktop);

        return () => {
            window.removeEventListener('scroll', tooltipOn);
            window.removeEventListener('touchstart', setMobile);
            window.removeEventListener('mousedown', setDesktop);
            window.removeEventListener('mousemove', setDesktop);
        };
    }, []);

    function setMobile() {
        mobile.current = true;
    }

    function setDesktop() {
        mobile.current = false;
    }

    function tooltipOn() {
        if (!tooltipDesktop.current || !tooltipMobile.current || !back.current) return;

        //Это был настоящий scroll?
        if (currentScroll.current === document.documentElement.scrollTop) return;

        //Обновить значение
        currentScroll.current = document.documentElement.scrollTop;

        /**Обновление timer, если подсказка уже активна*/
        if (active.current) {
            clearTimeout(timer.current);

            timer.current = setTimeout(tooltipOff, props.timerOff);

            return;
        }

        cancelAnimation();

        //Включить подсказку
        back.current.style.display = 'block';

        if (mobile.current) {
            tooltipMobile.current.style.display = 'flex';

            //Если предыдущая анимация прервана, сбросим значения на всякий случай
            tooltipDesktop.current.style.display = 'none';
            tooltipDesktop.current.style.opacity = 0;
        } else {
            tooltipDesktop.current.style.display = 'flex';

            //Если предыдущая анимация прервана, сбросим значения на всякий случай
            tooltipMobile.current.style.display = 'none';
            tooltipMobile.current.style.opacity = 0;
        }

        //Анимировать появление подсказки
        const propsBack = {
            timing: sliderDraw,
            duration: props.duration,
            draw: changeStyleProperty,
            element: back.current,
            property: 'opacity',
            startValue: 0,
            finalValue: props.backOpacity
        };

        const propsTooltip = {
            timing: sliderDraw,
            duration: props.duration,
            draw: changeStyleProperty,
            element: mobile.current ? tooltipMobile.current : tooltipDesktop.current,
            property: 'opacity',
            startValue: 0,
            finalValue: props.textOpacity
        };

        animateBack.current = new Animation(propsBack);
        animateTooltip.current = new Animation(propsTooltip);

        animateBack.current.start();
        animateTooltip.current.start();

        if (timer.current > 0) clearTimeout(timer.current);
        timer.current = setTimeout(tooltipOff, props.timerOff);

        active.current = true;
    }

    function tooltipOff() {
        if (!tooltipDesktop.current || !tooltipMobile.current || !back.current) return;

        //Колбэки установят display: "none" для всех элементов подсказки
        const callbackBack = () => {
            if (!back.current) return;

            back.current.style.display = 'none';
        };

        const callbackDesktop = () => {
            if (!tooltipDesktop.current) return;

            tooltipDesktop.current.style.display = 'none';
        };

        const callbackMobile = () => {
            if (!tooltipMobile.current) return;

            tooltipMobile.current.style.display = 'none';
        };

        cancelAnimation();

        /*Надо знать точно какой из вариантов подсказки активирован,
        чтобы его убрать. Так как к планшету может быть подключена
        мышь и пользователь может их использовать одновременно,
        что приведёт к некорректной анимации*/
        const mobileActive = tooltipMobile.current.style.display !== 'none' ? true : false;

        //Если предыдущая анимация прервана, сбросим значения на всякий случай
        if (mobileActive) {
            tooltipDesktop.current.style.display = 'none';
            tooltipDesktop.current.style.opacity = 0;
        } else {
            tooltipMobile.current.style.display = 'none';
            tooltipMobile.current.style.opacity = 0;
        }

        //Анимировать исчезновение подсказки
        const propsBack = {
            timing: invertedSliderDraw,
            duration: props.duration,
            draw: changeStyleProperty,
            element: back.current,
            property: 'opacity',
            startValue: props.backOpacity,
            finalValue: 0,
            callback: callbackBack
        };

        const propsTooltip = {
            timing: invertedSliderDraw,
            duration: props.duration,
            draw: changeStyleProperty,
            element: mobileActive ? tooltipMobile.current : tooltipDesktop.current,
            property: 'opacity',
            startValue: props.textOpacity,
            finalValue: 0,
            callback: mobileActive ? callbackMobile : callbackDesktop
        };

        animateBack.current = new Animation(propsBack);
        animateTooltip.current = new Animation(propsTooltip);

        animateBack.current.start();
        animateTooltip.current.start();

        timer.current = 0;
        active.current = false;
    }

    /**Отмена текущей анимации */
    function cancelAnimation() {
        if (animateBack.current) {
            animateBack.current.cancel();
            animateBack.current = undefined;
        }

        if (animateTooltip.current) {
            animateTooltip.current.cancel();
            animateTooltip.current = undefined;
        }
    }

    /**Отмена активной анимации */
    function cancelTooltip(e) {
        //e.preventDefault();
        
        if (active.current) {
            if (timer.current) clearTimeout(timer.current);
            
            tooltipOff();
        }
    }

    return(
        <div style={{position: 'relative'}}>
            {props.children}

            <div
            onTouchStart={cancelTooltip}
            onMouseDown={cancelTooltip}>
                <div ref={back} className={tooltipBack}></div>

                <div ref={tooltipDesktop} className={tooltip}>
                    {props.textDesktop}
                </div>

                <div ref={tooltipMobile} className={tooltip}>
                    {props.textMobile}
                </div>
            </div>
        </div>
    );
}

LeafletTooltip.defaultProps = {
    timerOff: 3000,
    duration: 300,
    textOpacity: 1,
    backOpacity: 0.5,
    textDesktop: <p>Меняйте масштаб карты колесом мыши, удерживая Shift<br/>(клик, чтобы скрыть подсказку)</p>,
    textMobile: <p>Перемещайте карту, проводя по ней двумя пальцами<br/>(коснитесь, чтобы скрыть подсказку)</p>
};

export default LeafletTooltip;