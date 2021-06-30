import React from 'react';
import {mobile, desktop} from './button-send.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Отправить
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true
 */
function ButtonSend(props) {
    const viewMode = props.mobile === true ? mobile : desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <button className={cssStyle}>Отправить</button>;
};

export default ButtonSend;