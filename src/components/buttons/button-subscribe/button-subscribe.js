import React from 'react';
import {mobile, desktop} from './button-subscribe.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Подписаться
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true.
 */
function ButtonSubscribe (props) {
    const viewMode = props.mobile === true ? mobile : desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <button className={cssStyle}>Подписаться</button>;
};

export default ButtonSubscribe;