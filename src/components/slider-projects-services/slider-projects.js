import React from 'react';
import Slider from './slider';
import Buttons from '../buttons';
import Cards from '../cards-projects';

function SliderProjects() {
    const params = {
        visible: 1,
        treshold: 0.1,
        prev: <ArrowLeft/>,
        next: <ArrowRight/>
    };
    
    return <Slider params={params}>{cards}</Slider>;
}

export default SliderProjects;

const cards = [
    <Cards.Green.Mobile/>,
    <Cards.Education.Mobile/>,
    <Cards.Technopark.Mobile/>
];

const ArrowLeft = () => (
    <div style={{alignSelf: 'center'}}>
        <Buttons.Arrow.MobileLeft/>
    </div>
);

const ArrowRight = () => (
    <div style={{alignSelf: 'center'}}>
        <Buttons.Arrow.MobileRight/>
    </div>
);