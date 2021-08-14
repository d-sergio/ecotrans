import React, { useEffect, useState } from 'react';
import Slider from './slider';
import Buttons from '../../../../components/buttons';
import Cards from '../../../../components/cards-services';
import useMediaQuery from '../../../react/react-hooks/use-media-query';
import config from '../../../../config/config-media-queries.json';

function SliderServices() {  
    
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