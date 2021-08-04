import React from 'react';
import {container, image, text} from './picture-text-right.module.css';

/**Картинка с текстом справа */
function PictureTextRight(props) {
    return(
        <div className={container}>
            <img className={image} src={props.image} alt="picture"/>
            
            <p className={text}>{props.text}</p>
        </div>
    );
}

export default PictureTextRight;