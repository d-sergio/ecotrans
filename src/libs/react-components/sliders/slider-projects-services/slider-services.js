import React from 'react';
import Slider from './slider';
import Buttons from '../../../../components/buttons';
import Cards from '../../../../components/cards-services';

function SliderServices() {
    const params = {
        visible: 1,
        treshold: 0.1,
        prev: <ArrowLeft/>,
        next: <ArrowRight/>
    };
    
    return <Slider visible={1} treshold={0.1} prev={<ArrowLeft/>} next={<ArrowRight/>}>{cards}</Slider>;
}

export default SliderServices;

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