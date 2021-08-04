import React from 'react';
import {container, image, text} from './picture-text-right.module.css';

/**Картинка с текстом справа
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
 * <PictureTextRight image={img} text={}/>
 */
function PictureTextRight(props) {
    return(
        <div className={container}>
            <img className={image} src={props.image} alt="picture"/>
            
            <p className={text}>{props.text}</p>
        </div>
    );
}

export default PictureTextRight;