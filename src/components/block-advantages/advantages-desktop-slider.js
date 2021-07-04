import React from 'react';
import Slider from '../slider/slider';
import {text} from './block-advantages-desktop.module.css';
import Cards from '../cards-advantages';
import {mobileContainerWhite} from '../../common-styles/containers.module.css';

const advCards = [
        <Cards.Ecologist/>,
        <Cards.License/>,
        <Cards.Technologies/>,
        <Cards.Training/>
    ];

function AdvDeskSlider() {
    const sliderParams = {
        visible: 0,
        adjacent: 0.24
    };

    return(
        <div className={mobileContainerWhite}>
            <div className={text}>Преимущества работы с нами</div>
            <Slider params={sliderParams}>{advCards}</Slider>
        </div>
    );
}

export default AdvDeskSlider;