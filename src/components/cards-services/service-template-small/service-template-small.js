import React from 'react';
import {commonStyle} from '../service-template-common/service-template-common.module.css';
import {small, image, serviceName} from './service-template-small.module.css';

const styles = [small, commonStyle].join(" ");

/**Шаблон карточки слайдера Услуги (маленька для десктопа)
 * 
 * Props:
 * @param {Node} logo - элемент <img> с логотипом карточки
 * @param {String|Node} serviceName - название услуги
 */
function CardServiceMobile(props) {

    return (
        <div className={styles}>
            <div className={image}>
                {props.logo}
            </div>
            <div className={serviceName}>{props.serviceName}</div>
        </div>
    );
}

export default CardServiceMobile;