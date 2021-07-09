import React, {useState, useEffect} from 'react';
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

/**Блок "Преимущества работы с нами" (десктопный)
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
                active ? <Slider key={1} visible={0} adjacent={true} freeze={false}>{advCards}</Slider>
                : <div className={desktopContainer}><Slider key={2} visible={4} adjacent={false} freeze={true}>{advCards}</Slider></div>
            }
        </>
    );
}

export default BlockAdvDesktop;