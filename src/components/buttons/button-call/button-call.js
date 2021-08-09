import React from 'react';
import {mobile, desktop} from './button-call.module.css';
import {buttonsCommon} from '../common-buttons.module.css';
import config from '../../../config/config.json';

/**Кнопка Позвонить
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true
 */
function ButtonCall(props) {
    const viewMode = props.mobile === true ? mobile : desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <a href={`tel: ${config.phone}`}><button className={cssStyle}>Позвонить</button></a>;
};

export default ButtonCall;