import React from 'react';
import {mobile, desktop} from './button-contact.module.css';
import {buttonsCommon} from '../common-buttons.module.css';


/**Кнопка Связаться (с нами)
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true.
 */
function ButtonContact(props) {
    const viewMode = props.mobile === true ? mobile: desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    const buttonText = 'Связаться';

    return <a href="mailto: ecotranskursk@yandex.ru"><button className={cssStyle}>{buttonText}</button></a>;
};

export default ButtonContact;