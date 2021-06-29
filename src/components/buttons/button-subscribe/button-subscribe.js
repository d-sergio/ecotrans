import React from 'react';
import {mobile, desktop} from './button-subscribe.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Подписаться
 * 
 * Props:
 * @param {Boolean} desktop - десктопный вариант, если true.
 * Иначе - мобильный
 */
function ButtonSubscribe (props) {
    const viewMode = props.desktop === true ? desktop : mobile;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <button className={cssStyle}>Подписаться</button>;
};

export default ButtonSubscribe;