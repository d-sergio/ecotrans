import React from 'react';
import {mobile, desktop} from './button-send.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Отправить
 * 
 * Props:
 * @param {Boolean} desktop - десктопный вариант, если true.
 * Иначе - мобильный
 */
function ButtonSend(props) {
    const viewMode = props.desktop === true ? desktop : mobile;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <button className={cssStyle}>Отправить</button>;
};

export default ButtonSend;