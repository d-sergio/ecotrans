import React from 'react';
import Buttons from '../../buttons';
import pic from '../../../../static/images/block-call/call-desktop.png';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {container, main, text, image} from './block-call-desktop.module.css';

function BlockCallDesktop() {
    return(
        <section className={mainContainer}>
            <div className={container}>
                <div className={main}>
                    <div className={title}>
                        Позвоните нам прямо сейчас!
                    </div>

                    <div className={text}>
                        Мы подготовим необходимые документы, которые вы получите
                        в течение трех дней. Позвоните нам и наш менеджер подробно
                        объяснит, как заказать любую из наших услуг.
                    </div>

                    <Buttons.Call.Desktop/>

                </div>

                <div className={image}>
                    <img src={pic} alt="call"/>
                </div>
            </div>
        </section>
    );
}

export default BlockCallDesktop;