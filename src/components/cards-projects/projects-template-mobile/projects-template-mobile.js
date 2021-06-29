import React from 'react';
import {commonStyle} from '../projects-template-common/projects-template-common.module.css';
import {mobile, image, serviceName} from './projects-template-mobile.module.css';
import ButtonLook from '../../buttons/button-look';

const styles = [commonStyle, mobile].join(" ");

/**Шаблон карточки слайдера Проекты (мобильная версия)
 * 
 * Props:
 * @param {Node} logo - элемент <img> с логотипом карточки
 * @param {{String|Node}} serviceName - название проекта
 */
function ProjectsTemplateMobile(props) {

    return (
        <div className={styles}>
            <div className={image}>
                {props.logo}
            </div>
            <div className={serviceName}>{props.serviceName}</div>
            <ButtonLook/>
        </div>
    );
}

export default ProjectsTemplateMobile;