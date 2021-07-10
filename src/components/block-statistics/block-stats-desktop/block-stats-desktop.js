import React, {useEffect, useState} from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import Cards from '../../cards-statistics';
import mediaQuery from '../../../libs/react/media-query';
import config from '../../../config/config-media-queries.json';
import {sliderDeskContainer} from '../../../common-styles/containers.module.css';

const cards = [
    <Cards.DangerClass/>,
    <Cards.TenYears/>,
    <Cards.Tko/>,
    <Cards.WasteClass/>,
    <Cards.MedicalWaste/>
];

const visible = {
    0: 1,
    660: 3,
    1020: 5
};

/**Блок статистики (десктопный)
 * 
 * По смыслу в работе с mediaQuery тут active равен mobile
 */
function BlockStatsDesktop() {
    const queries = {
        mobile: config.blockStatsDesktop.mobile,
        desktop: config.blockStatsDesktop.desktop
    };

    const [active, setActive] = useState(undefined);

    useEffect(() => mediaQuery(active, setActive, queries), [active]);

    if (active === undefined) return null;

    return(
        <div className={active ? null : sliderDeskContainer}>
            <Slider
                key={active}
                visible={active ? visible : 5}
                adjacent={active ? true : false}
                freeze={active ? false : true}
                autoMove={active ? true : false}
                cancelAutoMove={active ? true : false}>

                {cards}

            </Slider>
        </div>
    );
}

export default BlockStatsDesktop;