import React from 'react';
import {Link} from 'gatsby';
import {mobileContainerWhite} from '../../../common-styles/containers.module.css';
import {title, link, text, button, images} from './block-instagram-mobile.module.css';
import Buttons from '../../buttons';
import Slider from '../../slider';

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
        <div className={images}><img src={img4} alt="instagram4"/></div>,
    ];
    
    const sliderParams = {
        visible: 0,
        adjacent: true
    };

    return(
        <>
            <div className={mobileContainerWhite}>
                <div className={title}>Будьте на связи!</div>
                <div className={text}>
                    Подпишитесь на наш <span className={link}><Link to='https://www.instagram.com/ecotrans46/'>Instagram.</Link></span><br/>
                    Тут вся полезная информация!
                </div>
            </div>
            <Slider params={sliderParams}>{slides}</Slider>
            <div className={button}>
                <Buttons.Subscribe.Mobile/>
            </div>
        </>
    );
}

export default BlockInstagramMobile;