import React from 'react';
import {Link} from 'gatsby';
import ButtonDetailed from '../../buttons/button-detailed';
import {ToAnchor} from '../../../libs/react-components/anchors';
import {commonStyle} from '../projects-template-common/projects-template-common.module.css';
import {
        size,
        circleActive,
        circleInActive,
        smallActive,
        smallInActive,
        largeActive,
        largeInActive,
        image,
        imageActive,
        imageInActive,
        text,
        nameActive,
        nameInActive,
        description
    } from "./projects-template-desktop.module.css";

/**Шаблон карточки слайдера Проекты
 * 
 * Props:
 * @param {Boolean} active - большая карточка с описанием и кнопкой, если true.
 * Маленькая только с картинкой и названием, если false
 * @param {Node} logo - элемент <img> с логотипом карточки
 * @param {String|Node} nameSmall - название проекта (большая карточка)
 * @param {String|Node} nameLarge - название проекта (маленькая карточка)
 * @param {String|Node} description - описание проекта
 */
function ProjectsTemplateDesktop(props) {
    const circle = props.active === true ? circleActive : circleInActive;
    const circleStyle = [circle, commonStyle].join(" ");

    const largeStyle = props.active === true ? largeActive : largeInActive;
    const smallStyle = props.active === true ? smallActive : smallInActive;

    const imageLarge = [image, imageActive].join(" ");
    const imageSmall = [image, imageInActive].join(" ");

    return (
        <div className={size}>
            <div className={circleStyle}>

                <div className={largeStyle}>
                    <div className={imageLarge}>
                        {props.logo}
                    </div>
                    <div className={text}>
                        <div className={nameActive}>
                            {props.nameLarge}
                        </div>
                        <div className={description}>
                            {props.description}
                        </div>
                    </div>
                    <ToAnchor to={props.toAnchor}>
                        <Link to='/projects'>
                            <ButtonDetailed/>
                        </Link>
                    </ToAnchor>
                </div>

                <div className={smallStyle}>
                    <div className={imageSmall}>
                        {props.logo}
                    </div>
                    <div className={nameInActive}>
                        {props.nameSmall}
                    </div>
                </div>

            </div>
        </div>
    );
}


export default ProjectsTemplateDesktop;

ProjectsTemplateDesktop.defaultProps = {
    toAnchor: ''
};