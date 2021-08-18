import React, { useState } from 'react';
import {mobile, desktop} from './button-order.module.css';
import {buttonsCommon} from '../common-buttons.module.css';
import ModalCallback from '../../modal-callback';
import ModalContactProject from '../../modal-contact-project';

/**Кнопка Заказать
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true
 * @param {String} serviceName - название услуги:
 * docs, medical, neutralization, training, transportation
 */
function ButtonOrder(props) {
    const viewMode = props.mobile === true ? mobile : desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    const [isOpen, setOpen] = useState(false);

    const [key, setKey] = useState(0);

    function openModal() {
        setKey(key + 1);
        setOpen(true);
    }

    return (
        <>
            <button onClick={openModal} className={cssStyle}>
                Заказать
            </button>
            
            <ModalContactProject
                key={key}
                projectName='training'
                isOpen={isOpen}
                closeModal={() => setOpen(false)}
                serviceName={props.serviceName}
            />
        </>
    );
};

export default ButtonOrder;