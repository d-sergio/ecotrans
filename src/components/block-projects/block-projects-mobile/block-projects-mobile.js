import React from 'react';
import Slider from '../../slider-projects-services';
import {mobileContainerGreen} from '../../../common-styles/containers.module.css';
import {style, text} from './block-projects-mobile.module.css';

function BlockProjectsMobile() {
    const servicesStyle = [style, mobileContainerGreen].join(" ");

    return(
        <>
            <div className={text}>Наши проекты</div>
            <div className={servicesStyle}>
                <Slider.Projects/>
            </div>
        </>
    );
}

export default BlockProjectsMobile;