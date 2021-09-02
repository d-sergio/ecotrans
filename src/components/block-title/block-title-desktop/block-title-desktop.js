import React from 'react';
import Buttons from '../../buttons';
import {container, about, ecotrans, waste, text} from './block-title-desktop.module.css';
import {mainContainer, greenContainer} from '../../../common-styles/containers.module.css';
import TitleImage from '../../title-image';

function TitleDesktop(props) {
    const containerStyle = [mainContainer, container].join(" ");

    return(
        <div className={greenContainer}>
            <section className={containerStyle}>
                <div className={text}>
                    <p className={about}>Транспортировка, утилизация и обезвреживание отходов</p>
                    <h1 className={ecotrans}>ЭКОТРАНС</h1>
                    <p className={waste}>Отходы - это не мусор</p>

                    <div onClick={props.openModal}>
                        <Buttons.Contact.TitleDesktop/>
                    </div>
                </div>

                <TitleImage/>
            </section>
        </div>
    );
}

export default TitleDesktop;