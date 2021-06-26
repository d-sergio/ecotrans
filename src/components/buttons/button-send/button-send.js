import React from 'react';
import {style} from './button-send.module.css';
import {buttonsStyle} from '../common-buttons.module.css';

const cssStyle = [style, buttonsStyle].join(' ');

const ButtonSend = () => {
    return <button className={cssStyle}>Отправить</button>;
};

export default ButtonSend;