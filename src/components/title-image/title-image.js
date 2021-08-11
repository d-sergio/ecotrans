import React from 'react';
import { container, image, imageContainer, imageContainerLeft, imageContainerCenter,
    imageContainerRight, bottomStyle, mobile, mobileImage } from './title-image.module.css';
import titleLeft from '../../../static/images/block-title/title_left.png';
import titleCenter from '../../../static/images/block-title/title_center.png';
import titleRight from '../../../static/images/block-title/title_right.png';
import mobilePic from '../../../static/images/block-title/mobile.svg';

function TitleImage() {

    const containerLeft = [imageContainer, imageContainerLeft].join(" ");
    const containerCenter = [imageContainer, imageContainerCenter].join(" ");
    const containerRight = [imageContainer, imageContainerRight].join(" ");

    return(
        <div className={container}>
            <div className={containerLeft}>
                <img className={image} src={titleLeft} alt='title_left'/>
            </div>

            <div className={containerRight}>
                <img className={image} src={titleRight} alt='title_right'/>
            </div>

            <div className={containerCenter}>
                <img className={image} src={titleCenter} alt='title_center'/>
            </div>

            <div className={bottomStyle}></div>

            <div className={mobile}>
                <img className={mobileImage} src={mobilePic} alt='mobile'/>
            </div>
        </div>
    );
}

export default TitleImage;