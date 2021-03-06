import React from 'react';
import {container, image, text, imgWrapper, overlay} from './picture-text-over.module.css';

/**Картинка с текстом поверх неё */
function PictureTextOver(props) {
    return(
        <div className={container}>
            
            <div className={imgWrapper}>
                <img
                    onLoad={props.onload || null}
                    className={props.className || image}
                    src={props.image}
                    alt='pic_text_over'
                />
            </div>

            <div className={overlay}>{props.overlay}</div>

            <div className={text}>{props.text}</div>
        </div>
    );
}

export default PictureTextOver;

PictureTextOver.defaultProps = {
    overlay: null
};