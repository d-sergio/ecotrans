import React from 'react';
import Slider from './slider';
import Buttons from '../../../../components/buttons';
import Cards from '../../../../components/cards-projects';

function SliderProjects() {
    return <Slider
            visible={1}
            treshold={0.1}
            prev={<ArrowLeft/>}
            next={<ArrowRight/>}>

                {cards}

            </Slider>;
}

export default SliderProjects;

const cards = [
    <Cards.Green.Mobile key='CardProjMobGreen'/>,
    <Cards.Education.Mobile key='CardProjMobEducation'/>,
    <Cards.Technopark.Mobile key='CardProjMobTechnopark'/>
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