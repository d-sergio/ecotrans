import React, {useState, useEffect} from 'react';
import Slider from '../../../libs/react-components/sliders/slider';
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

/**Блок "Преимущества работы с нами" (десктопный)*/
function BlockAdvDesktop() {
    const queries = {
        mobile: config.blockAdvDesktop.small,
        desktop: config.blockAdvDesktop.large
    };

    const [active, setActive] = useState(undefined);

    useEffect(() => mediaQuery(active, setActive, queries), [active]);

    if (active === undefined) return null;

    return(
        <>
            <div className={desktopContainer}>
                <div className={text}>Преимущества работы с нами</div>
            </div>
            <div className={active ? null : desktopContainer}>
                <Slider
                    visible={active ? 0: 4}
                    adjacent={active ? true : false}
                    freeze={active ? false : true}>

                    {advCards}
                    
                </Slider>
            </div>
        </>
    );
}

export default BlockAdvDesktop;