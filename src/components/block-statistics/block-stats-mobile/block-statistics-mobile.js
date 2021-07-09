import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight/slider';
import Cards from '../../cards-statistics';

const cards = [
    <Cards.DangerClass mobile={true}/>,
    <Cards.TenYears mobile={true}/>,
    <Cards.Tko mobile={true}/>,
    <Cards.WasteClass mobile={true}/>,
    <Cards.MedicalWaste mobile={true}/>
];

const visible = {
    0: 1,
    450: 3,
    768: 5
}

/**Блок статистики (мобильный)*/
function BlockStatsDesktop() {

    return <Slider key={1} visible={visible} autoMove={true} cancelAutoMove={true} adjacent={true}>{cards}</Slider>;

}

export default BlockStatsDesktop;