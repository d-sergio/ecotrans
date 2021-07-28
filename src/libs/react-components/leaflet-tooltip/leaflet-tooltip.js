import React, { useEffect, useRef, useState } from 'react';
import {tooltip, tooltipBack} from './leaflet-tooltip.module.css';
import tooltipAnimation from './tooltip-animation';

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
 * @param {number} timerOff (3000) - через сколько мс отключится подсказка
 * @param {number} duration (300) - длительность анимации мс
 * @param {number} textOpacity (1) - прозрачность текста подсказки
 * @param {number} backOpacity (1) - прозрачность тёмной подложки
 * @param {node} textMobile - текст мобильной подсказки
 *  (<p>Перемещайте карту, проводя по ней двумя пальцами<br/>(коснитесь, чтобы скрыть подсказку)</p>)
 * @param {node} textDesktop - текст десктопной подсказки
 *  (<p>Меняйте масштаб карты колесом мыши, удерживая Shift<br/>(клик, чтобы скрыть подсказку)</p>)
 */

function LeafletTooltip(props) {
    const tooltipDesktop = useRef(null);
    const tooltipMobile = useRef(null);
    const back = useRef(null);
    const timer = useRef(0);    //здесь будет setTimeout
    const active = useRef(false);   //подсказка активна?
    const mobileDevice = useRef(false);   //сенсорное устройство?
    const animate = useRef(undefined);  //здесь будут объекты анимации
    const touchScrollOn= useRef(false);
    //const [touchScrollOn, setTouchScrollOn] = useState(false);
    
    //Сначала отключить подсказку
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

        /*Порядок обработчиков имеет значение!
        #1. wheel - сразу понятно, что это мышь, поэтому десктопная подсказка
        #2. #3. - touchstart и touchmove укажут, что это сенсорное устройство
        #4. На scroll подсказка появляется только для сенсорных устройств.
        На этом обработчике уже можно быть уверенным в типе устройства
        
        Зачем для десктопа wheel, а для сенсора scroll?
        
        В некоторых десктопных браузерах клик на карте или кнопках масштабирования
        может вызвать на ней событие focus с последующим scroll. Это вызовет лишнюю
        подсказку, поэтому wheel лучше здесь подходит. В мобильных браузерах такой
        проблемы нет, поэтому подходит scroll*/
        window.addEventListener('wheel', tooltipOn);    //#1
        window.addEventListener('touchstart', setMobile);   //#2
        window.addEventListener('touchmove', setMobile);    //#3
        window.addEventListener('scroll', onScroll);    //#4
        window.addEventListener('mousedown', setDesktop);
        window.addEventListener('mousemove', setDesktop);

        return () => {
            window.removeEventListener('wheel', tooltipOn);
            window.removeEventListener('touchstart', setMobile);
            window.removeEventListener('touchmove', setMobile);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('mousedown', setDesktop);
            window.removeEventListener('mousemove', setDesktop);
        };
    }, []);

    /**Если scroll на мобильном, то сразу выводится подсказка*/
    function onScroll() {
        if (mobileDevice.current) tooltipOn();
    }

    /**Событие указывает, что это сенсорное устройство*/
    function setMobile() {
        mobileDevice.current = true;
    }

    /**Событие указывает, что это устройство с мышью*/
    function setDesktop() {
        mobileDevice.current = false;
    }

    /**Включить подсказку */
    function tooltipOn(e) {
        /**Обновление timer, если подсказка уже активна*/
        if (active.current) {
            clearTimeout(timer.current);

            timer.current = setTimeout(tooltipOff, props.timerOff);

            return;
        }

        tooltipAnimation.turnOn(
            {
                back,
                tooltipMobile,
                tooltipDesktop,
                mobileDevice,
                animate,
                props
            }
        );

        if (timer.current > 0) clearTimeout(timer.current);
        timer.current = setTimeout(tooltipOff, props.timerOff);

        active.current = true;
    }

    /**Отключить подсказку */
    function tooltipOff() {
        tooltipAnimation.turnOff(
            {
                back,
                tooltipMobile,
                tooltipDesktop,
                mobileDevice,
                animate,
                props
            }
        );

        timer.current = 0;
        active.current = false;
    }

    /**Пользователь может коснуться экрана, чтобы скрыть подсказку, а может
     * коснуться экрана, чтобы листать страницу.
     * 
     * #1 Начинаем отслеживать события touch
     * #2 Если пользователь начал листать, отметим это в touchScrollOn
     * #3 Проверяем был ли скролл и соответственно решаем скрывать подсказку
     * или нет
     * #4 Скрываем подсказку
     */
    function onTouchStart() {   //#1
        document.addEventListener('touchmove', onTouchMove, {once: true});
        document.addEventListener('touchend', onTouchEnd, {once: true});
    }

    function onTouchMove() {    //#2
        touchScrollOn.current = true;
    }

    function onTouchEnd() { //#3
        if (touchScrollOn.current) return;

        touchScrollOn.current = false;
        cancelTooltip();
    }

    function cancelTooltip() { //#4
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
            onTouchStart={onTouchStart}
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