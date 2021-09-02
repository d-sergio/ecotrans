import React from 'react';
import Slider from '../../../libs/react-components/sliders/mobile-projects-services';
import {greenContainer, mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {style, text, container} from './block-services-mobile.module.css';

function BlockServicesMobile() {
    const servicesStyle = [style, greenContainer].join(" ");
    const titleStyle = [title, mainContainer, text].join(" "); 

    return(
        <section className={container}>
            <div className={titleStyle}>Услуги</div>
            <div className={servicesStyle}>
                <Slider.Services/>
            </div>
        </section>
    );
}

export default BlockServicesMobile;