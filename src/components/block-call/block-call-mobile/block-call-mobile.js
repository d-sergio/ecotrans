import React from 'react';
import Buttons from '../../buttons';
import pic from '../../../../static/images/block-call/call-mobile.png';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {text, image, floatImage, container, button} from './block-call-mobile.module.css';

function BlockCallMobile() {
    return(
        <div className={mainContainer}>
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
                
            </div>

            <div className={button}>
                <Buttons.Call.Mobile/>
            </div>

            </div>
        </div>
    );
}

export default BlockCallMobile;