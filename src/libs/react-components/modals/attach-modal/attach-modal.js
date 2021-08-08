import React, { useEffect, useRef, useState } from 'react';
import Modal from '../modal';

/**Модальное окно, прикрепляемый к дочернему элементу
 * 
 * Использование:
 * 
 * <AttachModal modal={<Modal/>}>
 *      <ButtonOpenModal/>
 * </AttachModal>
 * 
 * <Modal/> - ваше модальное окно
 * <ButtonOpenModal/> - дочерний элемент, при клике на котором откроется
 * модальное окно
 * 
 * Создать кнопку закрытия модального окна можно, добавив элементу атрибут data-close-modal.
 * 
 * По умолчанию модальное окно закрывается кликом по пространству вокруг него. Это можно
 * изменить через пропс defaultClose (см. ниже)
 * 
 * Props:
 * 
 * @param {boolean} isOpen - открыт ли модальное окно по умолчанию
 * @param {String} className - css-стили модальное окно
 * @param {Node} modal - модальное окно
 * @param {boolean} defaultClose - true (по умолчанию) разрешает закрывать
 * модальное окно кликом по пространству вокруг него
 * @param {number} duration - время анимации (мс) открытия/закрытия
 * модального окна (300 по умолчанию)
 */
function AttachModal(props) {
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

    function openModal() {
        if (!isOpen) setOpen(true);
    }

    /**props.children - элемент, к которому прикреплён модальное окно */
    return (
        <div onClick={openModal}>
            
            {props.children}

            <Modal
                defaultClose={props.defaultClose}
                isOpen={isOpen}
                closeModal={() => setOpen(false)}
                className={props.className}
                modal={props.modal}
                duration={props.duration}
            />

        </div>
    );
}

export default AttachModal;

AttachModal.defaultProps = {
    isOpen: false,
    defaultClose: true,
    duration: 300
};