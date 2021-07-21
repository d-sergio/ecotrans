import React, { useEffect, useRef, useState } from 'react';
import {tooltip, tooltipBack} from './leaflet-tooltip.module.css';
import {Animation, changeStyleProperty, sliderDraw, invertedSliderDraw} from '../../animate/animate';

const timerOff = 3000; // через сколько мс отключится подсказка

function LeafletTooltip() {
    const tooltipDesktop = useRef(null);
    const tooltipMobile = useRef(null);
    const back = useRef(null);
    const timer = useRef(0);    //здесь будет setTimeout
    const active = useRef(false);   //подсказка активна?
    const mobile = useRef(false);
    //сенсорное устройство?
    //const [mobile, setMobile] = useState(false);

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

        return () => window.removeEventListener('scroll', tooltipOn);
    }, []);

    function tooltipOn() {
        if (!tooltipDesktop.current || !tooltipMobile.current || !back.current) return;

        /**Обновление timer, если подсказка уже активна*/
        if (active.current) {
            clearTimeout(timer.current);

            timer.current = setTimeout(tooltipOff, timerOff);

            return;
        }

        //Включить подсказку
        back.current.style.display = 'block';

        if (mobile.current) {
            tooltipMobile.current.style.display = 'flex';
        } else {
            tooltipDesktop.current.style.display = 'flex';
        }

        //Анимировать появление подсказки
        const propsBack = {
            timing: sliderDraw,
            duration: 300,
            draw: changeStyleProperty,
            element: back.current,
            property: 'opacity',
            startValue: 0,
            finalValue: 0.5
        };

        const propsTooltip = {
            timing: sliderDraw,
            duration: 300,
            draw: changeStyleProperty,
            element: mobile.current ? tooltipMobile.current : tooltipDesktop.current,
            property: 'opacity',
            startValue: 0,
            finalValue: 1
        };

        const animateBack = new Animation(propsBack);
        const animateTooltip = new Animation(propsTooltip);

        animateBack.start();
        animateTooltip.start();

        if (timer.current > 0) clearTimeout(timer.current);
        timer.current = setTimeout(tooltipOff, timerOff);

        active.current = true;
    }

    function tooltipOff() {
        if (!tooltipDesktop.current || !tooltipMobile.current || !back.current) return;

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

        /*Надо знать точно какой из вариантов подсказки активирован,
        чтобы его убрать. Так как к планшету может быть подключена
        мышь и пользователь может их использовать одновременно,
        что приведёт к некорректной анимации*/
        const mobileActive = tooltipMobile.current.style.display !== 'none' ? true : false;

        //Анимировать исчезновение подсказки
        const propsBack = {
            timing: invertedSliderDraw,
            duration: 300,
            draw: changeStyleProperty,
            element: back.current,
            property: 'opacity',
            startValue: 0.5,
            finalValue: 0,
            callback: callbackBack
        };

        const propsTooltip = {
            timing: invertedSliderDraw,
            duration: 300,
            draw: changeStyleProperty,
            element: mobileActive ? tooltipMobile.current : tooltipDesktop.current,
            property: 'opacity',
            startValue: 1,
            finalValue: 0,
            callback: mobileActive ? callbackMobile : callbackDesktop
        };

        const animateBack = new Animation(propsBack);
        const animateTooltip = new Animation(propsTooltip);

        animateBack.start();
        animateTooltip.start();

        timer.current = 0;
        active.current = false;
    }

    function cancelTooltip(e) {
        if (active.current) {
            if (timer.current) clearTimeout(timer.current);
            timer.current = 0;
            
            tooltipOff();
        }
    }

    function onTouchStart(e) {
        cancelTooltip(e);
        mobile.current = true;
    }

    return(
        <div
        onTouchStart={(e) => onTouchStart(e)}
        onWheel={() => mobile.current = false}
        onMouseDown={(e) => cancelTooltip(e)}>
            <div ref={back} className={tooltipBack}></div>

            <div ref={tooltipDesktop} className={tooltip}>
                <p>Меняйте масштаб карты колесом мыши, удерживая Shift<br/>(клик, чтобы скрыть подсказку)</p>
            </div>

            <div ref={tooltipMobile} className={tooltip}>
                <p>Перемещайте карту, проводя по ней двумя пальцами<br/>(коснитесь, чтобы скрыть подсказку)</p>
            </div>
        </div>
    );
}

export default LeafletTooltip;