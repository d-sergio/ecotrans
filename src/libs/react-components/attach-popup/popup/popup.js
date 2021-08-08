import React, {useEffect, useRef} from 'react';
import {container} from '../attach-popup.module.css';
import animateOpen from './animate-open';
import animateClose from './animate-close';
/**
 * По умолчанию попап закрывается кликом по пространству вокруг него. Это можно
 * изменить через пропс defaultClose (см. ниже)
 * 
 * Props:
 * @param {Node} popup - попап
 * @@param {String} className - css-стили попапа
 * @param {String} isOpen - true, чтобы открыть попап
 * @param {function} closePopup - функция закрытия попапа
 * @param {boolean} defaultClose - true (по умолчанию) разрешает закрывать попап
 * кликом по пространству вокруг него
 * @param {number} duration - время анимации (мс) открытия/закрытия попапа
 * (300 по умолчанию)
 */
function Popup(props) {
    const popupRef = useRef(null);
    const animate = useRef();   //Объект анимации
    
    useEffect(initialize, []);

    useEffect(animatePopup, [props.isOpen]);


    /**Инициализация */
    function initialize() {
        if (!popupRef.current) return;

        if (props.isOpen) {
            popupRef.current.style.display = 'flex';
        } else {
            popupRef.current.style.display = 'none';
        }
    }
    
    /**Анимация закрытия/открытия попапа */
    function animatePopup() {
        
        const duration = props.duration;

        props.isOpen ?
            animateOpen({popupRef, animate, duration})
            : animateClose({popupRef, animate, duration});
    }

    /**Закрыть popup кликом по пустому пространству вокруг него (атрибут
     * data-close-empty) или по элементу с атрибутом data-close-popup.
     * 
     * props.defaultClose === false запрещает закрывать кликом по пустому
     * пространству
    */
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

        if (props.isOpen) props.closePopup();
    }

    return(
        <div
            data-close-empty
            ref={popupRef}
            className={props.className || container}
            onClick={closePopup}
        >
            {props.popup}
        </div>
    );
}

export default Popup;

Popup.defaultProps = {
    defaultClose: true,
    popup: <div style={{backgroundColor: 'white'}}>Hello, world!</div>,
    duration: 300
};