import React from 'react';
import Slider from '../../../libs/react-components/sliders/mobile-projects-services';
import {mobileContainerGreen, mobileContainerWhite} from '../../../common-styles/containers.module.css';
import {titleMobile} from '../../../common-styles/title.module.css';
import {style, text} from './block-services-mobile.module.css';

function BlockServicesMobile() {
    const servicesStyle = [style, mobileContainerGreen].join(" ");
    const titleStyle = [titleMobile, mobileContainerWhite, text].join(" "); 

    return(
        <>
            <div className={titleStyle}>Услуги</div>
            <div className={servicesStyle}>
                <Slider.Services/>
            </div>
        </>
    );
}

export default BlockServicesMobile;