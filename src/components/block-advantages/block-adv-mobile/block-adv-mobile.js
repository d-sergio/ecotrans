import React from 'react';
import Slider from '../../slider/slider';
import {text} from './block-adv-mobile.module.css';
import Cards from '../../cards-advantages';

const advCards = [
    <Cards.Ecologist mobile={true}/>,
    <Cards.License mobile={true}/>,
    <Cards.Technologies mobile={true}/>,
    <Cards.Training mobile={true}/>
]

function BlockAdvMobile() {
    const sliderParams = {
        visible: 0,
        adjacent: 0.24
    };

    return(
        <div>
            <div className={text}>Наши преимущества</div>
            <Slider params={sliderParams}>{advCards}</Slider>
        </div>
    );
}

export default BlockAdvMobile;