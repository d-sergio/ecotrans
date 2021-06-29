import React from 'react';
import {mobile, desktop} from './button-choose.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Выбрать
 * 
 * Props:
 * @param {Boolean} desktop 
 * @returns 
 */
function ButtonChoose(props) {
    const viewMode = props.desktop === true ? desktop : mobile;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <button className={cssStyle}>Выбрать</button>;
};

export default ButtonChoose;