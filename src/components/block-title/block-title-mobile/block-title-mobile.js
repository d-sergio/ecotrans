import React from 'react';
import Buttons from '../../buttons';
import {container, text, ecotrans, waste, imageContainer, image} from './block-title-mobile.module.css';
import mobilePic from '../../../../static/images/block-title/mobile.svg';

function BlockTitleMobile(props) {
    return(
        <section className={container}>
            <div className={text}>
                <h1 className={ecotrans}>Экотранс</h1>
                <p className={waste}>Отходы - это не мусор</p>

                <div onClick={props.openModal}>
                    <Buttons.Contact.TitleMobile/>
                </div>
            </div>

            <div className={imageContainer}>
                <img className={image} src={mobilePic} alt='mobile_pic'/>
            </div>
        </section>
    );
}

export default BlockTitleMobile;