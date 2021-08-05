import React, { useEffect, useRef, useState } from 'react';
import usePrevious from '../../react/react-hooks/use-previous-hook';
import Animation from "../../animate/animate";
import spoilerTimeFunctions from '../../animate/time-functions/spoiler-time-function';
import changeStyleProperty from '../../animate/draw-functions/change-style-property';
import {titleStyle, iconStyle, bodyStyle} from "./spoiler-float-icon.module.css";
import throttle from '../../throttle';

/**Спойлер. Вариант с плавающей кнопкой "закрыть/открыть"
 * (позиционируется абсолютно). Кнопка всегда рядом с заголовком спойлера, даже
 * если его текст переносится на новую строку
 * 
 * Props:
 * 
 * @param {String | Node} title - заголовок спойлера. Должен быть display: inline!
 * @param {String} titleClass - стили CSS для заголовка. По умолчанию:
 * 
 *     display: flex;
 *     cursor: pointer;
 * 
 * @param {String} iconClass - стили CSS для кнопки закрыть/открыть.
 * По умолчанию:
 * 
 *     display: flex;
 * 
 * @param {number} iconShiftX - сдвиг кнопки "закрыть/открыть" вправо
 * @param {number} titleWidth - сколько процентов (без знака %) по ширине
 * занимает заголовок по отношению к ширине спойлера. Может потребоваться,
 * если кнопка (позиционируется абсолютно) вылетает за пределы экрана
 * 
 * @param {node} close - иконка закрытия
 * @param {node} open - иконка открытия
 * @param {node} body - основное содержимое спойлера
 * @param {boolean} isOpen - первоначальное состояние спойлера: true - раскрыт,
 * @param {boolean} false - закрыт (по умолчанию true)
 * @param {number} duration - время анимации раскрытия/закрытия спойлера
 * в мс (300 по умолчанию)
 */
function SpoilerFloat(props) {
    const [open, setOpen] = useState(props.isOpen);
    const [iconX, setIconX] = useState(0);
    const [iconY, setIconY] = useState(0);
    const prevState = usePrevious(open);
    const body = useRef(null);
    const animate = useRef(undefined);   //здесь будет объект анимации
    const titleRef = useRef(null);
    const iconRef = useRef(null);

    const throttleSetIconPosition = throttle(setIconPosition, 300);

    //инициализация
    useEffect(() => {
        if (!body.current) return;

        if (!props.isOpen) {
            body.current.style.height = '0';
        }

        //посчитать координаты кнопки, когда шрифты загрузились
        document.fonts.ready.then(() => initIcon());
    }, []);

    //новое состояние
    useEffect(() => {
        //хук не должен работать при инициализации
        if (prevState === undefined) return;

        if (!body.current) return;

        if (open) {
            animateOpen();
        } else {
            animateClose();
        }
    }, [open]);

    /**Инициализация координат кнопки Закрыть/Открыть */
    function initIcon() {
        setIconPosition();

        if (typeof window === undefined) return;

        window.addEventListener('resize', throttleSetIconPosition);

        return () => {
            if (typeof window === undefined) return;

            window.removeEventListener('resize', throttleSetIconPosition);
        };
    }

    /**Расчёт координат кнопки Закрыть/Открыть */
    function setIconPosition() {
        if (!titleRef.current || !iconRef.current) return;

        const titleWidth = titleRef.current.offsetWidth;

        const titleHeight = titleRef.current.offsetHeight;

        const iconHeight = iconRef.current.offsetHeight;

        const newIconX = titleWidth + props.iconShiftX + 'px';
        const newIconY = titleHeight / 2 - iconHeight / 2 + 'px';

        setIconX(newIconX);
        setIconY(newIconY);
    }

    function animateClose() {
        if (!body.current) return;

        if (animate.current) animate.current.cancel();

        const animationProps = {
            timing: spoilerTimeFunctions.inverted,
            duration: props.duration,
            draw: changeStyleProperty,
            element: body.current,
            property: 'height',
            startValue: body.current.scrollHeight,
            finalValue: 0,
            units: 'px'
        }

        animate.current = new Animation();
        animate.current.set(animationProps);
        animate.current.start();
    }

    function animateOpen() {
        if (!body.current) return;

        if (animate.current) animate.current.cancel();
        
        body.current.style.height = 'auto'; //откроем, чтобы увидеть высоту контента
        const finalHeight = body.current.scrollHeight;  //запомним
        body.current.style.height = '0';    //и снова закроем

        const callback = () => {    //после анимации высота должна быть автоматической
            if (!body.current) return;

            body.current.style.height = 'auto';
        };

        const animationProps = {
            timing: spoilerTimeFunctions.straight,
            duration: props.duration,
            draw: changeStyleProperty,
            element: body.current,
            property: 'height',
            startValue: 0,
            finalValue: finalHeight,
            units: 'px',
            callback: callback
        }

        animate.current = new Animation();
        animate.current.set(animationProps);
        animate.current.start();
    }

    return(
        <>
            <div                
                className={props.titleClass || titleStyle}
                onClick={() => setOpen(!open)}
            >

                <div style={{width: props.titleWidth + '%'}}>

                    <div
                        style={{display: 'inline', position: 'relative'}}
                        ref={titleRef}
                    >
                        {props.title}

                        <div ref={iconRef}
                            style={
                                {
                                    position: 'absolute',
                                    top: iconY,
                                    left: iconX
                                }
                            }
                            className={props.iconClass || iconStyle}
                        >

                            {open ? props.open : props.close}
                            
                        </div>

                    </div>
                </div>

            </div>

            <div ref={body} className={bodyStyle}>{props.body}</div>
        </>
    );
}

SpoilerFloat.defaultProps = {
    isOpen: true,
    open: null,
    close: null,
    body: null,
    duration: 300,
    iconShiftX: 0,
    titleWidth: 85
};

export default SpoilerFloat;