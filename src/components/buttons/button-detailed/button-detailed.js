import React from 'react';
import {style} from './button-detailed.module.css';
import {buttonsStyle} from '../common-buttons.module.css';

const cssStyle = [style, buttonsStyle].join(' ');

const ButtonDetailed = () => {   
    return <button className={cssStyle}>Подробнее</button>;
};

export default ButtonDetailed;