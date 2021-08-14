import React, { useContext } from 'react';
import ButtonCall from '../../buttons/button-call/button-call';
import pic from '../../../../static/images/block-call/call-mobile.png';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {text, image, floatImage, container, buttonBottom, buttonTop} from './block-call-compact.module.css';
import MobileView from '../../root-layout/view-context';

function BlockCallMobile() {
    const mobileView = useContext(MobileView);

    return(
        <section className={mainContainer}>
            <div className={container}>
                
            <div className={title}>
                Позвоните нам!
            </div>
            
            <div className={floatImage}>

                <img className={image} src={pic} alt="call"/>

                <p className={text}>
                    Мы подготовим необходимые документы, которые вы получите
                    в течение трех дней. Позвоните нам и наш менеджер подробно
                    объяснит, как заказать любую из наших услуг.
                </p>

                <div className={buttonTop}>
                    <ButtonCall mobile={mobileView}/>
                </div>
                
            </div>

            <div className={buttonBottom}>
                <ButtonCall mobile={mobileView}/>
            </div>

            </div>
        </section>
    );
}

export default BlockCallMobile;