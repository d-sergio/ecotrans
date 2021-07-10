import React, {useContext, useState, useEffect} from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import {desktopContainer} from '../../../common-styles/containers.module.css';
import {text} from './block-partners-desktop.module.css';
import Partners from '../../cards-partners';
import mediaQuery from '../../../libs/react/media-query';

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

const queries = {
    mobile: 'screen and (max-width: 1439px)',
    desktop: 'screen and (min-width: 1440px)'
};


/**Блок "Наши партнёры" (десктопный)*/
function BlockPartnersDesktop() {
    const [mobileView, setMobileView] = useState(undefined);

    useEffect(() => mediaQuery(mobileView, setMobileView, queries));

    if (mobileView === undefined) return null;

    return(
        <>
            <div className={desktopContainer}>
                <div className={text}>Наши партнеры</div>
            </div>
            <div className={mobileView ? null : desktopContainer}>
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