import React, { useEffect, useRef, useState } from 'react';
import usePrevious from '../../react/react-hooks/use-previous-hook';
import {Animation, spoilerDraw, invertedSpoilerDraw, changeStyleProperty} from "../../animate/animate";
import {titleStyle, iconStyle, bodyStyle} from "./spoiler.module.css";

/**Спойлер
 * 
 * Props:
 * 
 * title - заголовок спойлера 
 * close - иконка закрытия
 * open - иконка открытия
 * body - основное содержимое спойлера
 * isOpen - первоначальное состояние спойлера: true - раскрыт,
 * false - закрыт (по умолчанию true)
 * duration - время анимации раскрытия/закрытия спойлера
 * в мс (300 по умолчанию)
 */
function Spoiler(props) {
    const [open, setOpen] = useState(props.isOpen);
    const prevState = usePrevious(open);
    const body = useRef(null);
    const animate = useRef(undefined);   //здесь будет объект анимации

    //инициализация
    useEffect(() => {
        if (!body.current) return;

        if (!props.isOpen) {
            body.current.style.height = '0';
        }
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

    function animateClose() {
        if (!body.current) return;

        if (animate.current) animate.current.cancel();

        const animationProps = {
            timing: invertedSpoilerDraw,
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
            timing: spoilerDraw,
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
            <div className={titleStyle} onClick={() => setOpen(!open)}>
                {props.title}
                <div className={iconStyle}>{open ? props.open : props.close}</div>
            </div>

            <div ref={body} className={bodyStyle}>{props.body}</div>
        </>
    );
}

Spoiler.defaultProps = {
    isOpen: true,
    open: null,
    close: null,
    body: null,
    duration: 300
};

export default Spoiler;