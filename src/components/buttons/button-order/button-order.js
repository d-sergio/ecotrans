import React, { useState } from 'react';
import {mobile, desktop} from './button-order.module.css';
import {buttonsCommon} from '../common-buttons.module.css';
import ModalOrderService from '../../modal-order-service';

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

    return (
        <>
            <button onClick={() => setOpen(true)} className={cssStyle}>
                Заказать
            </button>
            
            <ModalOrderService
                key={isOpen}
                isOpen={isOpen}
                closeModal={() => setOpen(false)}
                serviceName={props.serviceName}
            />
        </>
    );
};

export default ButtonOrder;