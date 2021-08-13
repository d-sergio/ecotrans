import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import Partners from '../../cards-partners';

const cards = [
    <Partners.BuisnessRussia mobile={true} key='CardPartMobBuisnessRussia'/>,
    <Partners.EcoSputnik mobile={true} key='CardPartMobEcoSputnik'/>,
    <Partners.EcoFund mobile={true} key='CardPartMobEcoFund'/>,
    <Partners.Leader mobile={true} key='CardPartMobLeader'/>,
    <Partners.Filippov mobile={true} key='CardPartMobFilippov'/>,
    <Partners.EcoLab mobile={true} key='CardPartMobEcoLab'/>
];

const visible = {
    0: 1,
    480: 3,
    800: 5
};

function BlockPartnersMobile() {
    return (
        <section>
            <Slider
                visible={visible}
                adjacent={true}
                autoMove={true}
                cancelAutoMove={true}>

                {cards}

            </Slider>
        </section>
    );
}

export default BlockPartnersMobile;