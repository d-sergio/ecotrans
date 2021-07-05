import React from 'react';
import Slider from '../../slider-projects-services';
import {mobileContainerGreen} from '../../../common-styles/containers.module.css';
import {style} from './block-services-mobile.module.css';

function BlockServicesMobile() {
    const servicesStyle = [style, mobileContainerGreen].join(" ");

    return(
        <div className={servicesStyle}>
            <Slider.Services/>
        </div>
    );
}

export default BlockServicesMobile;