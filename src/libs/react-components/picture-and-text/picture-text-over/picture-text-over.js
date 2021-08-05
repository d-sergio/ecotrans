import React from 'react';
import {container, image, text} from './picture-text-over.module.css';

/**Картинка с текстом поверх неё */
function PictureTextOver(props) {
    return(
        <div className={container}>
            <img className={props.className || image} src={props.image} alt='day'/>
            <p className={text}>{props.text}</p>
        </div>
    );
}

export default PictureTextOver;