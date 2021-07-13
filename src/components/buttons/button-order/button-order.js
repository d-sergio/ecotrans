import React from 'react';
import {mobile, desktop} from './button-order.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Заказать
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true
 */
function ButtonOrder(props) {
    const viewMode = props.mobile === true ? mobile : desktop;
    const cssStyle = [viewMode, buttonsCommon].join(' ');

    return <button className={cssStyle}>Заказать</button>;
};

export default ButtonOrder;