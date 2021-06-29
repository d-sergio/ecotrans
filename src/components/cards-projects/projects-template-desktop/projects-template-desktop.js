import React, {useState, useEffect} from 'react';
import ButtonDetailed from '../../buttons/button-detailed';
import {commonStyle} from '../projects-template-common/projects-template-common.module.css';
import {image, nameSmall, nameLarge, description} from "./projects-template-desktop.module.css";

/**Шаблон карточки слайдера Проекты
 * 
 * Props:
 * @param {Boolean} smallMode - значение
 * @param {Node} logo - элемент <img> с логотипом карточки
 * @param {String|Node} nameSmall - название проекта (большая карточка)
 * @param {String|Node} nameLarge - название проекта (маленькая карточка)
 * @param {String|Node} description - описание проекта
 */
function ProjectsTemplateDesktop(props) {
    const viewMode = props.smallMode === true ? smallViewCSS : largeViewCSS;

    return (
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
    );
}

const smallViewCSS = {
    circle: {
        height: '296px',
        width: '296px',
        minWidth: '296px'
    },
    image: {
        height: '121px'
    },
    nameSmall: {
        display: 'flex',
        marginTop: '32px'
    },
    text: {
        height: '0px'
    },
    nameLarge: {
        display: 'none'
    },
    description: {
        display: 'none'
    },
    button: {
        display: 'none'
    }
};

const largeViewCSS  = {
    circle: {
        height: '448px',
        width: '448px',
        minWidth: '448px'
    },
    image: {
        height: '151px'
    },
    nameSmall: {
        display: 'none'
    },
    text: {
        height: '140px'
    },
    nameLarge: {
        display: 'flex'
    },
    description: {
        display: 'block'
    },
    button: {
        display: 'block'
    }
};

export default ProjectsTemplateDesktop;