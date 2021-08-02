import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import Cards from '../../cards-statistics';

const cards = [
    <Cards.DangerClass key={1} mobile={true}/>,
    <Cards.TenYears key={2} mobile={true}/>,
    <Cards.Tko key={3} mobile={true}/>,
    <Cards.WasteClass key={4} mobile={true}/>,
    <Cards.MedicalWaste key={5} mobile={true}/>
];

const visible = {
    0: 1,
    450: 3,
    768: 5
}

/**Блок статистики (мобильный)*/
function BlockStatsDesktop() {

    return <Slider
            key={1}
            visible={visible}
            autoMove={true}
            cancelAutoMove={true}
            adjacent={true}>

                {cards}

            </Slider>;

}

export default BlockStatsDesktop;