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
        const bodyExist = checkRef(body, 'useEffect (инициализация), реф body');
        if (!bodyExist) return;

        if (!props.isOpen) {
            body.current.style.height = '0';
        }
    }, []);

    //новое состояние
    useEffect(() => {
        //хук не должен работать при инициализации
        if (prevState === undefined) return;

        const bodyExist = checkRef(body, 'useEffect (новое состояние), реф body');
        if (!bodyExist) return;

        if (open) {
            animateOpen();
        } else {
            animateClose();
        }
    }, [open]);

    function animateClose() {
        const bodyExist = checkRef(body, 'animateClose, реф body');
        if (!bodyExist) return;

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
        const bodyExist = checkRef(body, 'animateOpen, реф body');
        if (!bodyExist) return;

        if (animate.current) animate.current.cancel();
        
        body.current.style.height = 'auto'; //откроем, чтобы увидеть высоту контента
        const finalHeight = body.current.scrollHeight;  //запомним
        body.current.style.height = '0';    //и снова закроем

        const callback = () => {    //после анимации высота должна быть автоматической
            const bodyExist = checkRef(body, 'animateOpen (из animate), реф body');
            if (!bodyExist) return;

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

    /**Существуют ли рефы?
     * ref- проверяемый реф
     * consumer - имя запрашивающей функции или другая информация
    */
    function checkRef(ref, consumer) {
        if (!ref.current) {
            console.log(`Spoiler. Остановлен в ${consumer}: ref is ${ref.current}`);
            return false;
        } else {
            return true;
        }
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