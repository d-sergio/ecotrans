import React, { useContext } from 'react';
import ButtonCall from '../../buttons/button-call/button-call';
import pic from '../../../../static/images/block-call/call-desktop.png';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {container, main, text, image} from './block-call-max.module.css';
import MobileView from '../../root-layout/view-context';

function BlockCallDesktop() {
    const mobileView = useContext(MobileView);

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

                    <ButtonCall mobile={mobileView}/>

                </div>

                <div className={image}>
                    <img src={pic} alt="call"/>
                </div>
            </div>
        </section>
    );
}

export default BlockCallDesktop;