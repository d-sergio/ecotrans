import Bottom from "./picture-text-bottom";
import Right from './picture-text-right';
import Over from './picture-text-over';

/**Картинка с текстом
 * Props:
 * @param {Object} imgSrc - импортированная картинка
 * @param {String | Node} text - текст
 * 
 * Bottom - текст снизу
 * Right - текст справа
 * Over - текст поверх картинки
 * 
 * Использование:
 * 
 * import img from '../image.jpg';
 * ...
 * const text = <p>Текст</p>;
 * 
 * <PictureAndTextRight image={img} text={}/>
 */
const PictureAndText = {
    Bottom,
    Right,
    Over
};

export default PictureAndText;