import React from 'react';
import Slider from '../../../libs/react-components/sliders/mobile-projects-services';
import {greenContainer} from '../../../common-styles/containers.module.css';
import {style} from './block-projects-mobile.module.css';

function BlockProjectsMobile() {
    const servicesStyle = [style, greenContainer].join(" ");

    return(
        <>
            <section className={servicesStyle}>
                <Slider.Projects/>
            </section>
        </>
    );
}

export default BlockProjectsMobile;