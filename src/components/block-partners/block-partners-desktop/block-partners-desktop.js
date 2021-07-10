import React, {useState, useEffect} from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import {desktopContainer} from '../../../common-styles/containers.module.css';
import {text} from './block-partners-desktop.module.css';
import Partners from '../../cards-partners';
import mediaQuery from '../../../libs/react/media-query';
import config from '../../../config/config-media-queries.json';

const cards = [
    <Partners.BuisnessRussia/>,
    <Partners.EcoSputnik/>,
    <Partners.EcoFund/>,
    <Partners.Leader/>,
    <Partners.Fillipov/>,
    <Partners.EcoLab/>
];

const visible = {
    0: 1,
    1050: 1,
    1440: 3
};


/**Блок "Наши партнёры" (десктопный)*/
function BlockPartnersDesktop() {
    const queries = {
        small: config.blockPartnersDesktop.small,
        large: config.blockPartnersDesktop.large
    };

    const [active, setActive] = useState(undefined);

    useEffect(() => mediaQuery(active, setActive, queries), []);

    if (active === undefined) return null;

    return(
        <>
            <div className={desktopContainer}>
                <div className={text}>Наши партнеры</div>
            </div>
            <div className={active ? null : desktopContainer}>
                <Slider
                    key={1}
                    visible={visible}
                    adjacent={true}
                    autoMove={true}
                    cancelAutoMove={true}>

                    {cards}
                    
                </Slider>
            </div>

        </>
    );
}

export default BlockPartnersDesktop;