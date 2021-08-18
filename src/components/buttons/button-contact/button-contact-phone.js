import React, { useState } from 'react';
import {mobile, desktop} from './button-contact.module.css';
import {buttonsCommon} from '../common-buttons.module.css';
import ModalCallback from '../../modal-callback/modal-callback';

/**Кнопка Связаться (с нами)
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true.
 */
function ButtonContact(props) {
    const [isOpen, setOpen] = useState(false);
    const [key, setKey] = useState(0);

    const viewMode = props.mobile === true ? mobile: desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    const buttonText = 'Связаться';

    function openModal() {
        setKey(key + 1);
        setOpen(true);
    }

    return (
        <>
            <button onClick={openModal} className={cssStyle}>
                {buttonText}
            </button>

            <ModalCallback
                reasonName='greenphone'
                key={key}
                isOpen={isOpen}
                closeModal={() => setOpen(false)}
            />
        </>
    );
};

export default ButtonContact;