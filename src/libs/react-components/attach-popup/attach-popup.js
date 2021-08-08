import React, { useEffect, useRef, useState } from 'react';
import Popup from './popup';

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
 */
function AttachPopup(props) {
    //прокрутка страницы предотвращаеся?
    const scrollPrevented = useRef(false);

    /*Свойство стиля display попапа:
    'flex' - попап открыт
    'none' - попап закрыт
    */
    const [display, setDisplay] = useState('none');

    useEffect(initialize, []);

    useEffect(preventScroll, [display]);

    /**Инициализация */
    function initialize() {
        if (typeof window === undefined) return;

        if (props.isOpen) {
        
            setDisplay('flex');

        } else {

            setDisplay('none');
        }
    }

    /**Обработчики для предотвращения прокрутки страницы */
    function preventScroll() {
        if (display === 'flex' && !scrollPrevented.current) {
            
            scrollPrevented.current = true;

            window.addEventListener('wheel', preventScrollEvent, {passive: false});
            window.addEventListener('touchmove', preventScrollEvent, {passive: false});

        } else if (display === 'none' && scrollPrevented.current) {

            scrollPrevented.current = false;

            window.removeEventListener('wheel', preventScrollEvent, {passive: false});
            window.removeEventListener('touchmove', preventScrollEvent, {passive: false});
        }

        setDisplay(display === 'flex' ? 'flex' : 'none');

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
        if (display === 'none') setDisplay('flex');
    }

    /**props.children - элемент, к которому прикреплён попап */
    return (
        <div onClick={openPopup}>
            
            {props.children}

            <Popup
                defaultClose={props.defaultClose}
                display={display}
                closePopup={() => setDisplay('none')}
                className={props.className}
                popup={props.popup}
            />

        </div>
    );
}

export default AttachPopup;

AttachPopup.defaultProps = {
    isOpen: false,
    defaultClose: true
};