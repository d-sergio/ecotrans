import React from 'react';
import Slider from './slider';
import Buttons from '../../../../components/buttons';
import Cards from '../../../../components/cards-services';

function SliderServices() {    
    return <Slider
            visible={1}
            treshold={0.1}
            prev={<ArrowLeft/>}
            next={<ArrowRight/>}>
                
                {cards}
        
            </Slider>;
}

export default SliderServices;

const cards = [
    <Cards.Docs.Mobile key='CardServMobDocs'/>,
    <Cards.Neutral.Mobile key='CardServMobNeutral'/>,
    <Cards.Transport.Mobile key='CardServMobTransport'/>,
    <Cards.Medical.Mobile key='CardServMobMedical'/>,
    <Cards.Training.Mobile key='CardServMobTraining'/>
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