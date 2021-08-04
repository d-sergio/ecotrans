import React from 'react';
import {container, image, text} from './picture-text-over.module.css';

/**Картинка с текстом поверх неё
 * 
 * Props:
 * @param {Object} image - импортированная картинка
 * @param {String | Node} text - текст
 * 
 * Использование:
 * 
 * import img from '../image.jpg';
 * ...
 * const text = <p>Текст</p>;
 * 
 * <PictureTextOver image={img} text={}/>
 */
function PictureTextOver(props) {
    return(
        <div className={container}>
            <img className={image} src={props.image} alt='day'/>
            <p className={text}>{props.text}</p>
        </div>
    );
}

export default PictureTextOver;