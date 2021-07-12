import React from 'react';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {link, text, button, images} from './block-instagram-mobile.module.css';
import Buttons from '../../buttons';
import Slider from '../../../libs/react-components/sliders/slider';

import img1 from '../../../../static/images/instagram/mobile/1.png';
import img2 from '../../../../static/images/instagram/mobile/2.png';
import img3 from '../../../../static/images/instagram/mobile/3.png';
import img4 from '../../../../static/images/instagram/mobile/4.png';

/**Блок Instagram (мобильный)*/
function BlockInstagramMobile() {
    const slides = [
        <div className={images}><img src={img1} alt="instagram1"/></div>,
        <div className={images}><img src={img2} alt="instagram2"/></div>,
        <div className={images}><img src={img3} alt="instagram3"/></div>,
        <div className={images}><img src={img4} alt="instagram4"/></div>
    ];

    return(
        <>
            <div className={mainContainer}>
                <div className={title}>Будьте на связи!</div>
                <div className={text}>
                    Подпишитесь на наш <span className={link}><a href='https://www.instagram.com/ecotrans46/'>Instagram.</a></span><br/>
                    Тут вся полезная информация!
                </div>
            </div>
            <Slider visible={0} adjacent={true}>{slides}</Slider>
            <div className={button}>
                <Buttons.Subscribe.Mobile/>
            </div>
        </>
    );
}

export default BlockInstagramMobile;