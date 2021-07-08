import React, {useEffect, useState} from 'react';
import Slider from '../../slider-highlight/slider';
import Cards from '../../cards-statistics';
import mediaQuery from '../../../libs/react/media-query';
import config from '../../../config/config-media-queries.json';


const cards = [
    <Cards.DangerClass/>,
    <Cards.TenYears/>,
    <Cards.Tko/>,
    <Cards.WasteClass/>,
    <Cards.MedicalWaste/>
];

const visible = {
    0: 1,
    650: 3,
    880: 5
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
        <div>
            {
                active ? <Slider key={1} visible={visible} autoMove={true} cancelAutoMove={true} adjacent={true}>{cards}</Slider>
                : <Slider key={2} visible={5} adjacent={false} freeze={true}>{cards}</Slider>
            }
        </div>
    );
}

export default BlockStatsDesktop;