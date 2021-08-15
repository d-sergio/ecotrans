import React from 'react';
import {mobile, desktop} from './button-contact.module.css';
import {buttonsCommon} from '../common-buttons.module.css';
import config from '../../../config/config.json';

/**Кнопка Связаться (с нами)
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true.
 */
function ButtonContact(props) {
    const viewMode = props.mobile === true ? mobile: desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    const buttonText = 'Связаться';

    return (
        <a href={`tel:${config.greenPhone}`}>
            <button className={cssStyle}>
                {buttonText}
            </button>
        </a>
    );
};

export default ButtonContact;