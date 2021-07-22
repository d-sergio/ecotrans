import React, {useState, useEffect} from 'react';
import Slider from '../../../libs/react-components/sliders/slider';
import Cards from '../../cards-advantages';
import mediaQuery from '../../../libs/react/media-query';
import config from '../../../config/config-media-queries.json';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {freezeContainer} from './block-adv-desktop.module.css';
import {title} from '../../../common-styles/title.module.css';

const advCards = [
    <Cards.Ecologist/>,
    <Cards.License/>,
    <Cards.Technologies/>,
    <Cards.Training/>
];

const titleStyle = [title, mainContainer].join(" ");

/**Блок "Преимущества работы с нами" (десктопный)*/
function BlockAdvDesktop() {
    const queries = {
        small: config.blockAdvDesktop.small,
        large: config.blockAdvDesktop.large
    };

    const [active, setActive] = useState(undefined);

    useEffect(() => mediaQuery(active, setActive, queries), []);

    if (active === undefined) return null;

    return(
        <>
            <div className={titleStyle}>Преимущества работы с нами</div>
            <div className={active ? null : freezeContainer}>
                <Slider
                    key={active}
                    visible={active ? 0 : 4}
                    adjacent={active ? true : false}
                    freeze={active ? false : true}>

                    {advCards}
                    
                </Slider>
            </div>
        </>
    );
}

export default BlockAdvDesktop;