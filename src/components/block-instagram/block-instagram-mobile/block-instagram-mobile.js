import React, { useContext } from 'react';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {link, text, button, images, container} from './block-instagram-mobile.module.css';
import ButtonSubscribe from '../../buttons/button-subscribe/button-subscribe';
import Slider from '../../../libs/react-components/sliders/slider';
import config from '../../../config/config.json';
import MobileContext from '../../root-layout/view-context';

import img1 from '../../../../static/images/instagram/desktop/1.png';
import img2 from '../../../../static/images/instagram/desktop/2.png';
import img3 from '../../../../static/images/instagram/desktop/3.png';
import img4 from '../../../../static/images/instagram/desktop/4.png';

/**Блок Instagram (мобильный)*/
function BlockInstagramMobile() {
    const mobileView = useContext(MobileContext);

    const slides = [
        <div className={images} key='instagram1mobile'><img src={img1} alt="instagram1"/></div>,
        <div className={images} key='instagram2mobile'><img src={img2} alt="instagram2"/></div>,
        <div className={images} key='instagram3mobile'><img src={img3} alt="instagram3"/></div>,
        <div className={images} key='instagram4mobile'><img src={img4} alt="instagram4"/></div>
    ];

    return(
        <section className={container}>
            <div className={mainContainer}>
                <div className={title}>Будьте на связи!</div>
                <div className={text}>
                    Подпишитесь на наш <span className={link}><a target='_blank' href={config.instagram}>Instagram.</a></span><br/>
                    Тут вся полезная информация!
                </div>
            </div>

            <Slider
            visible={0}
            adjacent={true}>

                {slides}
                
            </Slider>
            
            <div className={button}>
                <ButtonSubscribe mobile={mobileView}/>
            </div>
        </section>
    );
}

export default BlockInstagramMobile;