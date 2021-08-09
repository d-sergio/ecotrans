Картинка с текстом

<PictureAndText.Bottom/> - текст под картинкой
<PictureAndText.Right/> - текст справа от картинки
<PictureAndText.Over/> - текст в центре поверх картинки

Props:
@param {Object} image - импортированная картинка
@param {String | Node} text - текст
@param {String} className - стили CSS для img.
По умолчанию:

    max-width: 100%;
    height: auto;

Использование:

import img from '../image.jpg';
...
const text = <p>Текст</p>;

<PictureAndTextRight image={img} text={text}/>