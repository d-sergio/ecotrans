import React, {useEffect, useRef} from 'react';
import {container} from './modal.module.css';
import animateOpen from './animate-open';
import animateClose from './animate-close';
/**
 * По умолчанию модальное окно закрывается кликом по пространству вокруг него. Это можно
 * изменить через пропс defaultClose (см. ниже)
 * 
 * Props:
 * @param {Node} modal - модальное окно
 * @@param {String} className - css-стили модального окна
 * @param {String} isOpen - true, чтобы открыть модальное окно
 * @param {function} closeModal - функция закрытия модального окна
 * @param {boolean} defaultClose - true (по умолчанию) разрешает закрывать модальное окно
 * кликом по пространству вокруг него
 * @param {number} duration - время анимации (мс) открытия/закрытия модального окна
 * (300 по умолчанию)
 */
function Modal(props) {
    const modalRef = useRef(null);
    const animate = useRef();   //Объект анимации
    
    useEffect(initialize, []);

    useEffect(animateModal, [props.isOpen]);


    /**Инициализация */
    function initialize() {
        if (!modalRef.current) return;

        if (props.isOpen) {
            modalRef.current.style.display = 'flex';
        } else {
            modalRef.current.style.display = 'none';
        }
    }
    
    /**Анимация закрытия/открытия модального окна */
    function animateModal() {
        
        const duration = props.duration;

        props.isOpen ?
            animateOpen({modalRef, animate, duration})
            : animateClose({modalRef, animate, duration});
    }

    /**Закрыть модальное окно кликом по пустому пространству вокруг него (атрибут
     * data-close-empty) или по элементу с атрибутом data-close-modal.
     * 
     * props.defaultClose === false запрещает закрывать кликом по пустому
     * пространству
    */
    function closeModal(e) {
        if (!props.isOpen) return;

        if (props.defaultClose
            && (e.target.dataset.closeModal
            || e.target.dataset.closeEmpty)) {
                //закрытие модального окна кликом по пустому пространству разрешено
                props.closeModal();

        } else if (!props.defaultClose && e.target.dataset.closeModal) {

            //закрытие модального окна кликом по пустому пространству запрещено
            props.closeModal();
        }
    }

    return(
        <div
            data-close-empty
            ref={modalRef}
            className={props.className || container}
            onClick={closeModal}
        >
            {props.modal}
        </div>
    );
}

export default Modal;

Modal.defaultProps = {
    defaultClose: true,
    modal: <div style={{backgroundColor: 'white'}}>Hello, world!</div>,
    duration: 300
};