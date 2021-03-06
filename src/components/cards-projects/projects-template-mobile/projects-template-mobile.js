import React from 'react';
import {ToAnchor} from '../../../libs/gatsby-components/anchors';
import {Link} from 'gatsby';
import {commonStyle} from '../projects-template-common/projects-template-common.module.css';
import {mobile, image, orderName} from './projects-template-mobile.module.css';
import ButtonLook from '../../buttons/button-look';

const styles = [commonStyle, mobile].join(" ");

/**Шаблон карточки слайдера Проекты (мобильная версия)
 * 
 * Props:
 * @param {Node} logo - элемент <img> с логотипом карточки
 * @param {{String|Node}} orderName - название проекта
 */
function ProjectsTemplateMobile(props) {

    return (
        <div className={styles}>
            <div className={image}>
                {props.logo}
            </div>
            <div className={orderName}>{props.orderName}</div>

            <ToAnchor to={props.toAnchor}>
                <Link to='/projects'>
                    <ButtonLook/>
                </Link>
            </ToAnchor>
        </div>
    );
}

export default ProjectsTemplateMobile;

ProjectsTemplateMobile.defaultProps = {
    toAnchor: ''
};