import React, { useEffect, useRef, useState } from 'react';
import Popup from './popup/popup';

/**Попап, прикрепляемый к дочернему элементу
 * 
 * Использование:
 * 
 * <AttachPopup popup={<Popup/>}>
 *      <ButtonOpenPopup/>
 * </AttachPopup>
 * 
 * <Popup/> - ваш попап
 * <ButtonOpenPopup/> - дочерний элемент, при клике на котором откроется
 * попап
 * 
 * Создать кнопку закрытия попапа можно, добавив элементу атрибут data-close-popup.
 * 
 * По умолчанию попап закрывается кликом по пространству вокруг него. Это можно
 * изменить через пропс defaultClose (см. ниже)
 * 
 * Props:
 * 
 * @param {boolean} isOpen - открыт ли попап по умолчанию
 * @param {String} className - css-стили попапа
 * @param {Node} popup - попап
 * @param {boolean} defaultClose - true (по умолчанию) разрешает закрывать попап
 * кликом по пространству вокруг него
 * @param {number} duration - время анимации (мс) открытия/закрытия попапа
 * (300 по умолчанию)
 */
function AttachPopup(props) {
    //прокрутка страницы предотвращаеся?
    const scrollPrevented = useRef(false);

    const [isOpen, setOpen] = useState(false);

    useEffect(initialize, []);

    useEffect(preventScroll, [isOpen]);

    /**Инициализация */
    function initialize() {
        if (typeof window === undefined) return;

        if (props.isOpen) {
        
            setOpen(true);

        } else {

            setOpen(false);
        }
    }

    /**Обработчики для предотвращения прокрутки страницы */
    function preventScroll() {
        if (isOpen && !scrollPrevented.current) {
            
            scrollPrevented.current = true;

            window.addEventListener('wheel', preventScrollEvent, {passive: false});
            window.addEventListener('touchmove', preventScrollEvent, {passive: false});

        } else if (!isOpen && scrollPrevented.current) {

            scrollPrevented.current = false;

            window.removeEventListener('wheel', preventScrollEvent, {passive: false});
            window.removeEventListener('touchmove', preventScrollEvent, {passive: false});
        }

        return () => {            
            if (scrollPrevented.current) {
                window.removeEventListener('wheel', preventScrollEvent, {passive: false});
                window.removeEventListener('touchmove', preventScrollEvent, {passive: false});
            }
        };
    }

    /**Предотвратить прокрутку страницы */
    function preventScrollEvent(e) {
        e.preventDefault();
    }

    function openPopup() {
        if (!isOpen) setOpen(true);
    }

    /**props.children - элемент, к которому прикреплён попап */
    return (
        <div onClick={openPopup}>
            
            {props.children}

            <Popup
                defaultClose={props.defaultClose}
                isOpen={isOpen}
                closePopup={() => setOpen(false)}
                className={props.className}
                popup={props.popup}
                duration={props.duration}
            />

        </div>
    );
}

export default AttachPopup;

AttachPopup.defaultProps = {
    isOpen: false,
    defaultClose: true,
    duration: 300
};