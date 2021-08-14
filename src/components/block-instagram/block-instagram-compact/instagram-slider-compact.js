import React from 'react';
import {images} from './block-instagram-compact.module.css';
import img1 from '../../../../static/images/instagram/desktop/1.png';
import img2 from '../../../../static/images/instagram/desktop/2.png';
import img3 from '../../../../static/images/instagram/desktop/3.png';
import img4 from '../../../../static/images/instagram/desktop/4.png';
import Slider from '../../../libs/react-components/sliders/slider';

function InstagramSlider() {
    const slides = [
        <div className={images} key='instagram1mobile'>
            <a href={`https://www.instagram.com/ecotrans46/`} target='_blank'>
                <img src={img1} alt="instagram1"/>
            </a>
        </div>,

        <div className={images} key='instagram2mobile'>
            <a href={`https://www.instagram.com/ecotrans46/`} target='_blank'>
                <img src={img2} alt="instagram2"/>
            </a>
        </div>,

        <div className={images} key='instagram3mobile'>
            <a href={`https://www.instagram.com/ecotrans46/`} target='_blank'>
                <img src={img3} alt="instagram3"/>
            </a>
        </div>,

        <div className={images} key='instagram4mobile'>
            <a href={`https://www.instagram.com/ecotrans46/`} target='_blank'>
                <img src={img4} alt="instagram4"/>
            </a>
        </div>
    ];

    return(

        <Slider
            visible={0}
            adjacent={true}
        >

            {slides}
            
        </Slider>);
}

export default InstagramSlider;