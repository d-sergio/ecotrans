import React, {useState, useEffect} from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import Partners from '../../cards-partners';
import mediaQuery from '../../../libs/react/media-query';
import config from '../../../config/config-media-queries.json';

const cards = [    
    <Partners.EcoSputnik/>,
    <Partners.EcoFund/>,
    <Partners.Leader/>,
    <Partners.Filippov/>,
    <Partners.BuisnessRussia/>,
    <Partners.EcoLab/>
];

const visible = {
    0: 1,
    1050: 1,
    1440: 3
};

const titleStyle = [title, mainContainer].join(" ");

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
            <div className={titleStyle}>Наши партнеры</div>
            <div className={active ? null : mainContainer}>
                <Slider
                    key={visible}
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