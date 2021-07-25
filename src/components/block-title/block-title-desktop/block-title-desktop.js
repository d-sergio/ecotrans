import React from 'react';
import Buttons from '../../buttons';
import {outer, about, ecotrans, waste, image} from './block-title-desktop.module.css';
import {mainContainer} from '../../../common-styles/containers.module.css';
import titleImg from '../../../../static/images/block-title/desktop.png';
const containerStyle = [mainContainer, outer].join(" ");

function TitleDesktop() {
    return(
        <div className={containerStyle}>
            <div>
                <p className={about}>Транспортировка, утилизация и переработка отходов</p>
                <h1 className={ecotrans}>ЭКОТРАНС</h1>
                <p className={waste}>Отходы это не мусор</p>
                <Buttons.Contact.Desktop/>
            </div>

            <div className={image}>
                <img src={titleImg} alt="title_image"/>
            </div>
        </div>
    );
}

export default TitleDesktop;