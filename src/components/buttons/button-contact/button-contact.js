import React from 'react';
import {mobile, desktop} from './button-contact.module.css';
import {buttonsCommon} from '../common-buttons.module.css';


/**Кнопка Связаться (с нами)
 * 
 * Props:
 * @param {Boolean} desktop - десктопный вариант, если true.
 * Иначе - мобильный
 */
function ButtonContact(props) {
    const viewMode = props.desktop === true ? desktop : mobile;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    const buttonText = props.desktop === true ? 'Связаться с нами' : 'Связаться';

    return <button className={cssStyle}>{buttonText}</button>;
};

export default ButtonContact;