import React from 'react';
import Slider from '../../../libs/react-components/sliders/mobile-projects-services';
import {mobileContainerGreen} from '../../../common-styles/containers.module.css';
import {style, text} from './block-services-mobile.module.css';

function BlockServicesMobile() {
    const servicesStyle = [style, mobileContainerGreen].join(" ");

    return(
        <>
            <div className={text}>Услуги</div>
            <div className={servicesStyle}>
                <Slider.Services/>
            </div>
        </>
    );
}

export default BlockServicesMobile;