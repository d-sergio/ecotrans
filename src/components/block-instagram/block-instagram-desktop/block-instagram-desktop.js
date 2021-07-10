import React, {useState, useEffect} from 'react';
import Buttons from  '../../buttons'
import {title, subscribe, text, button, images} from './block-instagram-desktop.module.css';
import {desktopContainer} from '../../../common-styles/containers.module.css';
import Slider from '../../../libs/react-components/sliders/slider';
import mediaQuery from '../../../libs/react/media-query';
import config from '../../../config/config-media-queries.json';

import img1 from '../../../../static/images/instagram/desktop/1.png';
import img2 from '../../../../static/images/instagram/desktop/2.png';
import img3 from '../../../../static/images/instagram/desktop/3.png';
import img4 from '../../../../static/images/instagram/desktop/4.png';

const slides = [
    <div className={images}><img src={img1} alt="instagram1"/></div>,
    <div className={images}><img src={img2} alt="instagram2"/></div>,
    <div className={images}><img src={img3} alt="instagram3"/></div>,
    <div className={images}><img src={img4} alt="instagram4"/></div>
];

/**Блок Instagram (десктопный)*/
function BlockInstagramDesktop() {
    const queries = {
        small: config.blockInstagramDesktop.small,
        large: config.blockInstagramDesktop.large
    };

    const [active, setActive] = useState(undefined);

    useEffect(() => mediaQuery(active, setActive, queries), []);

    if (active === undefined) return null;

    return(
        <>
            <div className={desktopContainer}>
                <p className={title}>Будьте в курсе!</p><br/>
            </div>

            <div className={active ? null : desktopContainer}>
                <Slider
                    key={active}
                    visible={active ? 0 : 4}
                    freeze={active ? false : true}
                    adjacent={active ? true : false}>

                    {slides}

                </Slider>
            </div>

            <div className={desktopContainer}>
                <div className={subscribe}>
                    <div className={text}>
                        Мы освободили вашу почту от спам - рассылки с просьбой скинуть нам ваш email. <br/>
                        Вместо этого приглашем подписаться на наш Instagram. Тут вся полезная информация <br/>
                        не только о деятельности компании, но и последние новости экологического законодательства, <br/>
                        полезные советы по утилизации отходов и многое другое.
                    </div>
                    <div className={button}>
                        <Buttons.Subscribe.Desktop/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlockInstagramDesktop;