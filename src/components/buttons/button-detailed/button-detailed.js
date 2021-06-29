import React from 'react';
import {style} from './button-detailed.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Подробнее (только десктопная)*/
function ButtonDetailed () {   
    const cssStyle = [style, buttonsCommon].join(' ');
    return <button className={cssStyle}>Подробнее</button>;
};

export default ButtonDetailed;