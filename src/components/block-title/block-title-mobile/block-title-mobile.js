import React from 'react';
import Buttons from '../../buttons';
import {outer, container, ecotrans, waste} from './block-title-mobile.module.css';

function BlockTitleMobile() {
    return(
        <div className={outer}>
            <div className={container}>
                <h1 className={ecotrans}>Экотранс</h1>
                <p className={waste}>Отходы это не мусор</p>
                <Buttons.Contact.Mobile/>
            </div>
        </div>
    );
}

export default BlockTitleMobile;