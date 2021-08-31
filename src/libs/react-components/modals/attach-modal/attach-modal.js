import React, { useEffect, useState } from 'react';
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
    const [isOpen, setOpen] = useState(false);

    useEffect(initialize, []);

    /**Инициализация */
    function initialize() {
        if (typeof window === undefined) return;

        if (props.isOpen) {
        
            setOpen(true);

        } else {

            setOpen(false);
        }

        return () => {
            if (props.isOpen) {
                setOpen(false);
            }
        }
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