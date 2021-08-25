import React from 'react';
import Buttons from '../../buttons';
import {container, about, ecotrans, waste, text} from './block-title-desktop.module.css';
import {mainContainer} from '../../../common-styles/containers.module.css';
import TitleImage from '../../title-image';

function TitleDesktop() {
    const containerStyle = [mainContainer, container].join(" ");

    return(
        <section className={containerStyle}>
            <div className={text}>
                <p className={about}>Транспортировка, утилизация и переработка отходов</p>
                <h1 className={ecotrans}>ЭКОТРАНС</h1>
                <p className={waste}>Отходы - это не мусор</p>
                <Buttons.Contact.FormDesktop orderName='contact'/>
            </div>

            <TitleImage/>
        </section>
    );
}

export default TitleDesktop;