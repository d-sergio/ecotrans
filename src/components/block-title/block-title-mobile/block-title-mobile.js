import React from 'react';
import Buttons from '../../buttons';
import {outer, container, ecotrans, waste} from './block-title-mobile.module.css';

function TitleMobile() {
    return(
        <div className={outer}>
            <div className={container}>
                <h className={ecotrans}>Экотранс</h>
                <p className={waste}>Отходы это не мусор</p>
                <Buttons.Contact.Mobile/>
            </div>
        </div>
    );
}

export default TitleMobile;