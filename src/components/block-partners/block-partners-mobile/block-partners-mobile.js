import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import Partners from '../../cards-partners';

const cards = [
    <Partners.BuisnessRussia mobile={true}/>,
    <Partners.EcoSputnik mobile={true}/>,
    <Partners.EcoFund mobile={true}/>,
    <Partners.Leader mobile={true}/>,
    <Partners.Fillipov mobile={true}/>,
    <Partners.EcoLab mobile={true}/>
];

const visible = {
    0: 1,
    480: 3,
    800: 5
};

function BlockPartnersMobile() {
    return <Slider visible={visible} adjacent={true} autoMove={true} cancelAutoMove={true}>{cards}</Slider>;
}

export default BlockPartnersMobile;