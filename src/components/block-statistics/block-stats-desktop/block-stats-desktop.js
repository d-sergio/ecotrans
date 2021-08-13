import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import Cards from '../../cards-statistics';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';
import config from '../../../config/config-media-queries.json';
import {freezeContainer, marginBottom} from './block-stats-desktop.module.css';

const cards = [
    <Cards.TenYears key='CardStatTenYears'/>,
    <Cards.DangerClass key='CardStatDangerClass'/>,
    <Cards.Tko key='CardStatTko'/>,
    <Cards.WasteClass key='CardStatWasteClass'/>,
    <Cards.MedicalWaste key='CardStatMedicalWaste'/>
];

const visible = {
    0: 1,
    660: 3,
    1020: 5
};

/**Блок статистики (десктопный)*/
function BlockStatsDesktop() {
    const queries = {
        small: config.blockStatsDesktop.small,
        large: config.blockStatsDesktop.large
    };

    const active = useMediaQuery(queries);

    if (active === undefined) return null;

    const freezeStyle = [marginBottom, freezeContainer].join(" ");

    return(
        <section className={active ? marginBottom : freezeStyle}>
            <Slider
                key={active}
                visible={active ? visible : 5}
                adjacent={active ? true : false}
                freeze={active ? false : true}
                autoMove={active ? true : false}
                cancelAutoMove={active ? true : false}>

                {cards}

            </Slider>
        </section>
    );
}

export default BlockStatsDesktop;