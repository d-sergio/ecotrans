Картинка с текстом

<PictureText.Bottom/> - текст под картинкой
<PictureText.Right/> - текст справа от картинки
<PictureText.Over/> - текст в центре поверх картинки

Props:
@param {Object} imgSrc - импортированная картинка
@param {String | Node} text - текст
@param {String} className - стили CSS для img.
По умолчанию:

    max-width: 100%;
    height: auto;

Использование:

import img from '../image.jpg';
...
const text = <p>Текст</p>;

<PictureTextRight image={img} text={text}/>