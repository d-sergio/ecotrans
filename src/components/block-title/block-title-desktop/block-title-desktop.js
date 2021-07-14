import React from 'react';
import Buttons from '../../buttons';
import {outer, container, about, ecotrans, waste} from './block-title-desktop.module.css';
import {mainContainer} from '../../../common-styles/containers.module.css';

const containerStyle = [mainContainer, container].join(" ");

function TitleDesktop() {
    return(
        <div className={outer}>
            <div className={containerStyle}>
                <p className={about}>Транспортировка, утилизация и переработка отходов</p>
                <h className={ecotrans}>ЭКОТРАНС</h>
                <p className={waste}>Отходы это не мусор</p>
                <Buttons.Contact.Desktop/>
            </div>

        </div>
    );
}

export default TitleDesktop;