import React from 'react';
import {container, image, text} from './picture-text-right.module.css';

/**Картинка с текстом справа */
function PictureTextRight(props) {
    return(
        <div className={container}>
            <img
                onLoad={props.onload || null}
                className={props.className || image}
                src={props.image}
                alt="pic_text_right"
            />
            
            <div className={text}>{props.text}</div>
        </div>
    );
}

export default PictureTextRight;