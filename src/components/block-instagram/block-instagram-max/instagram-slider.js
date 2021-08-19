import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider';
import {images} from './block-instagram-max.module.css';
import {mainContainer} from '../../../common-styles/containers.module.css';
import img1 from '../../../../static/images/instagram/desktop/1.png';
import img2 from '../../../../static/images/instagram/desktop/2.png';
import img3 from '../../../../static/images/instagram/desktop/3.png';
import img4 from '../../../../static/images/instagram/desktop/4.png';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';
import config from '../../../config/config-media-queries.json';
import {moveOrTap, moveOrClick} from '../../../libs/move-or-click';

/**
 * State:
 * active - слайдер активен или не активен. На определённом разрешении замораживается
 */
function InstagramSlider() {
    const slides = [
        <div className={images} key='instagram1'>
            <a
                onMouseDown={moveOrClick}
                onTouchStart={moveOrTap}
                href={`https://www.instagram.com/ecotrans46/`} target='_blank'
            >
                <img src={img1} alt="instagram1"/>
            </a>
        </div>,

        <div className={images} key='instagram2'>
            <a
                onMouseDown={moveOrClick}
                onTouchStart={moveOrTap}
                href={`https://www.instagram.com/ecotrans46/`} target='_blank'
            >
                <img src={img2} alt="instagram2"/>
            </a>
        </div>,

        <div className={images} key='instagram3'>
            <a
                onMouseDown={moveOrClick}
                onTouchStart={moveOrTap}
                href={`https://www.instagram.com/ecotrans46/`} target='_blank'
            >
                <img src={img3} alt="instagram3"/>
            </a>
        </div>,

        <div className={images} key='instagram4'>
            <a
                onMouseDown={moveOrClick}
                onTouchStart={moveOrTap}
                href={`https://www.instagram.com/ecotrans46/`} target='_blank'
            >
                <img src={img4} alt="instagram4"/>
            </a>
        </div>
    ];

    const active = useMediaQuery(config.blockInstagramDesktop);

    if (active === undefined) return null;

    return(
        <div className={active ? null : mainContainer}>
            <Slider
                key={active}
                visible={active ? 0 : 4}
                freeze={active ? false : true}
                adjacent={active ? true : false}>

                {slides}

            </Slider>
        </div>
    );
}

export default InstagramSlider;