import React from 'react';
import {mobile, desktop} from './button-call.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Позвонить
 * 
 * Props:
 * @param {Boolean} desktop - десктопный вариант, если true.
 * Иначе - мобильный
 */
function ButtonCall(props) {
    const viewMode = props.desktop === true ? desktop : mobile;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <button className={cssStyle}>Позвонить</button>;
};

export default ButtonCall;