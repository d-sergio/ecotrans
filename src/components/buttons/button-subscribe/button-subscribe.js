import React from 'react';
import {Link} from 'gatsby';
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

    return <Link to='https://www.instagram.com/ecotrans46/'><button className={cssStyle}>Подписаться</button></Link>;
};

export default ButtonSubscribe;