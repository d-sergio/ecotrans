import React, {useState, useEffect} from 'react';
//import BlockAdvSlider from './adv-desktop-slider';
import Slider from '../../slider';
import Cards from '../../cards-advantages';
import mediaQuery from '../../../libs/react/media-query';
import config from '../../../config/config-media-queries.json';
import {desktopContainer} from '../../../common-styles/containers.module.css';
import {text} from './block-adv-desktop.module.css';

const advCards = [
    <Cards.Ecologist/>,
    <Cards.License/>,
    <Cards.Technologies/>,
    <Cards.Training/>
];

const activeMode = {
    visible: 0,
    adjacent: 0.24,
    freeze: false
};

const freezeMode = {
    visible: 4,
    freeze: true
}

/**Блок "Преимущества работы с нами"
 * 
 * По смыслу в работе с mediaQuery тут active равен mobile
 */
function BlockAdvDesktop() {
    const queries = {
        mobile: config.blockAdvDesktop.mobile,
        desktop: config.blockAdvDesktop.desktop
    };

    const [active, setActive] = useState(undefined);

    useEffect(() => mediaQuery(active, setActive, queries), [active]);

    if (active === undefined) return null;

    return(
        <>
            <div className={desktopContainer}>
                <div className={text}>Преимущества работы с нами</div>
            </div>
            {
                active ? <Slider key={1} params={activeMode}>{advCards}</Slider>
                : <Slider key={2} params={freezeMode}>{advCards}</Slider>
            }
        </>
    );
}

export default BlockAdvDesktop;