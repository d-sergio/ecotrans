import React from 'react';
import Slider from '../slider/slider';
import {text, cards} from './block-advantages-mobile.module.css';
import Cards from '../cards-advantages';

const advCards = [
    <Cards.Ecologist mobile={true}/>,
    <Cards.License mobile={true}/>,
    <Cards.Technologies mobile={true}/>,
    <Cards.Training mobile={true}/>
]

function AdvMobile() {
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

export default AdvMobile;