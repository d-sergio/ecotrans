import React from 'react';
import {mobile, desktop} from './button-call.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Позвонить
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true
 */
function ButtonCall(props) {
    const viewMode = props.mobile === true ? mobile : desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <button className={cssStyle}>Позвонить</button>;
};

export default ButtonCall;