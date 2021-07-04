import React from 'react';
import Slider from './slider';
import Buttons from '../buttons';
import Cards from '../cards-services';

function SliderMobile() {
    const params = {
        visible: 1,
        prev: <ArrowLeft/>,
        next: <ArrowRight/>
    };
    
    return <Slider params={params}>{cards}</Slider>;
}

export default SliderMobile;

const cards = [
    <Cards.Docs.Mobile/>,
    <Cards.Neutral.Mobile/>,
    <Cards.Transport.Mobile/>,
    <Cards.Medical.Mobile/>,
    <Cards.Training.Mobile/>
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