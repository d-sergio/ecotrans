import React from 'react';
import {text, cards} from './block-advantages-desktop.module.css';
import Cards from '../cards-advantages';
import {mobileContainerWhite} from '../../common-styles/containers.module.css';

const advCards = (
    <>
        <Cards.Ecologist/>
        <Cards.License/>
        <Cards.Technologies/>
        <Cards.Training/>
    </>
);

function AdvDesktop() {
    return(
        <div className={mobileContainerWhite}>
            <div className={text}>Преимущества работы с нами</div>
            <div className={cards}>{advCards}</div>
        </div>
    );
}

export default AdvDesktop;