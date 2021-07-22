import React from 'react';
import Slider from './slider';
import Buttons from '../../../../components/buttons';
import Cards from '../../../../components/cards-projects';

function SliderProjects() {
    return <Slider
            visible={1}
            treshold={0.1}
            prev={<ArrowLeft/>}
            next={<ArrowRight/>}
            disableScrollingOn={3}>

                {cards}

            </Slider>;
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