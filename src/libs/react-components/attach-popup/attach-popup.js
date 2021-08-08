import React, { useEffect, useRef, useState } from 'react';
import {container} from './attach-popup.module.css';

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
 * 
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

    /**Закрыть popup кликом по пустому пространству вокруг него */
    function closePopup(e) {
        if (props.defaultClose
            && !e.target.dataset.closePopup
            && !e.target.dataset.closeEmpty) {
                //закрытие попапа кликом по пустому пространству разрешено
                return;

        } else if (!props.defaultClose&& !e.target.dataset.closePopup) {

            //закрытие попапа кликом по пустому пространству запрещено
            return;
        }


        if (display === 'flex') setDisplay('none');
    }

    function openPopup() {
        if (display === 'none') setDisplay('flex');
    }

    const Popup = () => (
        <div
            data-close-empty
            style={{display: display}}
            className={props.className || container}
            onClick={closePopup}
        >
            {props.popup}
        </div>
        );

    return (
        <div onClick={openPopup}>
            
            {props.children}

            <Popup/>

        </div>
    );
}

export default AttachPopup;

AttachPopup.defaultProps = {
    isOpen: false,
    popup: <div style={{backgroundColor: 'white'}}>Hello, world!</div>,
    defaultClose: true
};