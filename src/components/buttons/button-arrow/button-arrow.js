import React from "react";
import {arrowCommon, arrowMobile, arrowDesktop} from './button-arrow-common.module.css';

/**Кнопка слайдера 
 * 
 * Props:
 * @param {Boolean} right - отображается стрелка влево, если false или не указано
 * Иначе - вправо
 * @param {Boolean} desktop - десктопный вариант, если true. Иначе - мобильный
*/
function ButtonArrow(props) {
    const direction = props.right === true ? {transform: 'scale(-1, 1)'} : {};
    const viewMode = props.desktop === true ? arrowDesktop : arrowMobile;

    const styles = [viewMode, arrowCommon].join(" ");
    
    return(<button style={direction} className={styles}/>);
};

export default ButtonArrow;