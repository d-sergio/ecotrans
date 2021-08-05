import React from 'react';
import pic from '../../../../static/images/button-scroll-up/up.svg';
import {image} from './button-scroll-up.module.css';

function ButtonScrollUp() {
    return <img className={image} src={pic} alt='scroll_up'/>
}

export default ButtonScrollUp;