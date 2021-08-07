import React from 'react';
import {container, image, text} from './picture-text-right.module.css';

/**Картинка с текстом справа */
function PictureTextRight(props) {
    return(
        <div className={container}>
            <img className={props.className || image} src={props.image} alt="picture"/>
            
            <div className={text}>{props.text}</div>
        </div>
    );
}

export default PictureTextRight;