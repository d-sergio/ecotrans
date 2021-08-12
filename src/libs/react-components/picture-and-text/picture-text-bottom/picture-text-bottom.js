import React from 'react';
import {container, imageContainer, image, text} from './picture-text-bottom.module.css';

/**Картинка с текстом внизу */
function PictureTextBottom(props) {
    return(
        <div className={container}>
            <div className={imageContainer}>
                <img
                    onLoad={props.onload || null}
                    className={props.className || image}
                    src={props.image}
                    alt="pic_text_bottom"
                />
            </div>
            
            <div className={text}>{props.text}</div>
        </div>
    );
}

export default PictureTextBottom;