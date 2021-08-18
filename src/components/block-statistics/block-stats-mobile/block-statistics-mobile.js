import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import Cards from '../../cards-statistics';

const cards = [
    <Cards.DangerClass mobile={true} key='CardStatMobileDangerClass'/>,
    <Cards.TenYears mobile={true} key='CardStatMobileTenYears'/>,
    <Cards.Tko mobile={true} key='CardStatMobileTko'/>,
    <Cards.WasteClass mobile={true} key='CardStatMobileWasteClass'/>,
    <Cards.MedicalWaste mobile={true} key='CardStatMobileMedicalWaste'/>
];

const visible = {
    0: 1,
    450: 3,
    768: 5
}

/**Блок статистики (мобильный)*/
function BlockStatsDesktop() {

    return (
        <section style={{marginBottom: '50px'}}>
            <Slider
                key={1}
                visible={visible}
                autoMove={true}
                cancelAutoMove={true}
                adjacent={true}
            >

                {cards}

            </Slider>
        </section>
    );

}

export default BlockStatsDesktop;