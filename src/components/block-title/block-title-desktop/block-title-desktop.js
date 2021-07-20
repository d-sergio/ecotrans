import React from 'react';
import Buttons from '../../buttons';
import {outer, about, ecotrans, waste, green} from './block-title-desktop.module.css';
import {mainContainer} from '../../../common-styles/containers.module.css';

//const containerStyle = [mainContainer, container].join(" ");
const containerStyle = [mainContainer, outer].join(" ");

function TitleDesktop() {
    return(
        <div className={green}>
            <div className={containerStyle}>
                <p className={about}>Транспортировка, утилизация и переработка отходов</p>
                <h1 className={ecotrans}>ЭКОТРАНС</h1>
                <p className={waste}>Отходы это не мусор</p>
                <Buttons.Contact.Desktop/>
            </div>
        </div>
    );
}

export default TitleDesktop;