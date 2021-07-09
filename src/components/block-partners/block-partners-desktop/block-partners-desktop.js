import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider-highlight';
import {desktopContainer} from '../../../common-styles/containers.module.css';
import {text} from './block-partners-desktop.module.css';
import Partners from '../../cards-partners';

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
    1050: 3,
    1750: 5
};

/**Блок "Наши партнёры" (десктопный)*/
function BlockPartnersDesktop() {
    return(
        <>
            <div className={desktopContainer}>
                <div className={text}>Наши партнеры</div>
            </div>
            <div>
                <Slider key={1} visible={visible} adjacent={true} autoMove={true} cancelAutoMove={true}>
                    {cards}
                </Slider>
            </div>
        </>
    );
}

export default BlockPartnersDesktop;