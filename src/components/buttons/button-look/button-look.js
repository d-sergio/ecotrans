import React from 'react';
import {style} from './button-look.module.css';
import {buttonsStyle} from '../common-buttons.module.css';

const cssStyle = [style, buttonsStyle].join(' ');

function ButtonLook () {
    return <button className={cssStyle}>Смотреть</button>;
};

export default ButtonLook;