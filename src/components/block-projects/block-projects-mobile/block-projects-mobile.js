import React from 'react';
import Slider from '../../../libs/react-components/sliders/mobile-projects-services';
import {mobileContainerGreen} from '../../../common-styles/containers.module.css';
import {style, text} from './block-projects-mobile.module.css';

function BlockProjectsMobile() {
    const servicesStyle = [style, mobileContainerGreen].join(" ");

    return(
        <>
            <div className={servicesStyle}>
                <Slider.Projects/>
            </div>
        </>
    );
}

export default BlockProjectsMobile;