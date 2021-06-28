import React from 'react';
import {commonStyle} from '../service-template-common/service-template-common.module.css';
import {mobile, image, serviceName} from './service-template-mobile.module.css';
import ButtonChoose from '../../buttons/button-choose';

const styles = [commonStyle, mobile].join(" ");

/**Шаблон карточки слайдера Услуги (мобильная версия)
 * 
 * Props:
 * @param {Node} logo - элемент <img> с логотипом карточки
 * @param {{String|Node}} serviceName - название услуги
 */
function ServicesTemplateMobile(props) {

    return (
        <div className={styles}>
            <div className={image}>
                {props.logo}
            </div>
            <div className={serviceName}>{props.serviceName}</div>
            <ButtonChoose/>
        </div>
    );
}

export default ServicesTemplateMobile;