import React from 'react';
import {container, imageContainer, image, text} from './picture-text-bottom.module.css';

/**Картинка с текстом внизу */
function PictureTextBottom(props) {
    return(
        <div className={container}>
            <div className={imageContainer}>
                <img className={props.className || image} src={props.image} alt="picture"/>
            </div>
            
            <p className={text}>{props.text}</p>
        </div>
    );
}

export default PictureTextBottom;