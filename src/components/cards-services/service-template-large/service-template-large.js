import React from 'react';
import {commonStyle} from '../service-template-common/service-template-common.module.css';
import {large, image, serviceName, text, description} from './service-template-large.module.css';
import ButtonChoose from '../../buttons/button-choose/button-choose';

const styles = [commonStyle, large].join(" ");

/**Шаблон карточки слайдера Услуги (мобильная версия)
 * 
 * Props:
 * @param {Node} logo - элемент <img> с логотипом карточки
 * @param {String|Node} serviceName - название услуги
 * @param {String|Node} description - описание услуги
 */
function ServicesTemplateLarge(props) {

    return (
        <div className={styles}>
            <div className={image}>
                {props.logo}
            </div>
            <div className={text}>
                <div className={serviceName}>{props.serviceName}</div>
                <div className={description}>{props.description}</div>
            </div>
            <ButtonChoose desktop={true}/>
        </div>
    );
}

export default ServicesTemplateLarge;