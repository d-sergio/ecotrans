Картинка с текстом

<PictureAndText.Bottom/> - текст под картинкой
<PictureAndText.Right/> - текст справа от картинки
<PictureAndText.Over/> - текст в центре поверх картинки

Props:
@param {Object} image - импортированная картинка
@param {String | Node} text - текст
@param {Function} onload - колбэк, который выполнится сразц после загрузки
картинки
@param {String} className - стили CSS для img.
По умолчанию:

    max-width: 100%;
    height: auto;

@param {Node} overlay - любой слой над картинкой (только для Over)

Использование:

import img from '../image.jpg';
...
const text = <p>Текст</p>;

<PictureAndTextRight image={img} text={text}/>