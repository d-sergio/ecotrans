import React from 'react';
import ButtonDetailed from '../../buttons/button-detailed';
import {commonStyle} from '../projects-template-common/projects-template-common.module.css';
import {image, nameSmall, nameLarge, description, size} from "./projects-template-desktop.module.css";

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
    const viewMode = props.active === true ? largeView : smallView;

    return (
        <div className={size}>
            <div style={viewMode.circle} className={commonStyle}>
                <div style={viewMode.image} className={image}>
                    {props.logo}
                </div>
                <div style={viewMode.nameSmall} className={nameSmall}>
                    {props.nameSmall}
                </div>
                <div style={viewMode.text}>
                    <div style={viewMode.nameLarge} className={nameLarge}>
                        {props.nameLarge}
                    </div>
                    <div style={viewMode.description} className={description}>
                        {props.description}
                    </div>
                </div>
                <div style={viewMode.button}>
                    <ButtonDetailed/>
                </div>
            </div>
        </div>
    );
}

const largeView = {
    circle: {
        height: '448px',
        width: '448px',
        minWidth: '448px'
    },
    image: {
        height: '151px',
        transition: 'all 0.5s'
    },
    nameSmall: {
        height: '0',
        marginTop: '0',
        opacity: '0',
        transition: 'all 0.5s'
    },
    text: {
        height: '140px',
        opacity: '1',
        transition: 'opacity 0.5s'
    },
    button: {
        height: 'auto',
        opacity: '1',
        transition: 'opacity 0.3s 0.2s'
    }
};

const smallView = {
    circle: {
        height: '296px',
        width: '296px',
        minWidth: '296px'
    },
    image: {
        height: '121px',
        transition: 'all 0.3s'
    },
    nameSmall: {
        height: 'auto',
        marginTop: '32px',
        opacity: '1',
        transition: 'all 0.3s'
    },
    text: {
        height: '0',
        opacity: '0',
        transition: 'all 0.3s'
    },
    button: {
        height: '0',
        opacity: '0',
        transition: 'all 0.1s'
    }
};


export default ProjectsTemplateDesktop;