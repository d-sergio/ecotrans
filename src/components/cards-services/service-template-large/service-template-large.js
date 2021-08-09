import React from 'react';
import {commonStyle} from '../service-template-common/service-template-common.module.css';
import {large, image, serviceName, text, description} from './service-template-large.module.css';
import ButtonChoose from '../../buttons/button-choose/button-choose';
import { ToAnchor } from '../../../libs/react-components/navigate';
import { Link } from 'gatsby';

const styles = [commonStyle, large].join(" ");

/**Шаблон карточки слайдера Услуги (большая для десктопа)
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
            <ToAnchor to={props.toAnchor}>
                <Link to='services'>
                    <ButtonChoose/>
                </Link>
            </ToAnchor>
        </div>
    );
}

export default ServicesTemplateLarge;

ServicesTemplateLarge.defaultProps = {
    toAnchor: ''
};