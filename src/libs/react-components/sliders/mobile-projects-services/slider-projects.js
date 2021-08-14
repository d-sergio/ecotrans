import React, { useEffect, useState } from 'react';
import Slider from './slider';
import Buttons from '../../../../components/buttons';
import Cards from '../../../../components/cards-projects';
import useMediaQuery from '../../../react/react-hooks/use-media-query';
import config from '../../../../config/config-media-queries.json';

function SliderProjects() {
        
    const smallShift = useMediaQuery(config.projectAndServices);

    const [buttonShift, setShift] = useState(0);

    useEffect(changeButtonShift, [smallShift]);

    function changeButtonShift() {
        setShift(smallShift ? 35 : 50);
    }

    return <Slider
                visible={1}
                treshold={0.1}
                prev={<ArrowLeft/>}
                next={<ArrowRight/>}
                buttonShift={buttonShift}
            >

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