import React from 'react';
import {style} from './button-look.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Смотреть (только мобильная)*/
function ButtonLook () {
    const cssStyle = [style, buttonsCommon].join(' ');

    return <button className={cssStyle}>Смотреть</button>;
};

export default ButtonLook;