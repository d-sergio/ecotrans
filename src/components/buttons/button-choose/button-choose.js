import React from 'react';
import {mobile, desktop} from './button-choose.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Выбрать
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true
 * @returns 
 */
function ButtonChoose(props) {
    const viewMode = props.mobile === true ? mobile : desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <button className={cssStyle}>Выбрать</button>;
};

export default ButtonChoose;