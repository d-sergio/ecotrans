import React from 'react';
import {style} from './button-call.module.css';
import {buttonsStyle} from '../common-buttons.module.css';

const cssStyle = [style, buttonsStyle].join(' ');

const ButtonCall = () => {
    return <button className={cssStyle}>Позвонить</button>;
};

export default ButtonCall;