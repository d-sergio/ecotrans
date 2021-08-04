import React from 'react';
import {container, imageContainer, image, text} from './picture-text-bottom.module.css';

/**Картинка с текстом внизу
 * 
 * Props:
 * @param {Object} imgSrc - импортированная картинка
 * @param {String | Node} text - текст
 * 
 * Использование:
 * 
 * import img from '../image.jpg';
 * ...
 * const text = <p>Текст</p>;
 * 
 * <PictureTextBottom image={img} text={}/>
 */
function PictureTextBottom(props) {
    return(
        <div className={container}>
            <div className={imageContainer}>
                <img className={image} src={props.image} alt="picture"/>
            </div>
            
            <p className={text}>{props.text}</p>
        </div>
    );
}

export default PictureTextBottom;