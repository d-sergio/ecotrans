import React, { useState } from 'react';
import {mobile, desktop} from './button-contact.module.css';
import {buttonsCommon} from '../common-buttons.module.css';
import ModalContactProject from '../../modal-contact-project';

/**Кнопка Связаться (с нами)
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true.
 * @param {String} projectName - название проекта
 */
function ButtonContact(props) {
    const viewMode = props.mobile === true ? mobile: desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    const buttonText = 'Связаться';

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)} className={cssStyle}>
                {buttonText}
            </button>
            
            <ModalContactProject
                key={isOpen}
                isOpen={isOpen}
                closeModal={() => setOpen(false)}
                projectName={props.projectName}
            />
        </>
    );
};

export default ButtonContact;