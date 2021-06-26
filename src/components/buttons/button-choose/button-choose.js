import React from 'react';
import {style} from './button-choose.module.css';
import {buttonsStyle} from '../common-buttons.module.css';

const cssStyle = [style, buttonsStyle].join(' ');

const ButtonChoose = () => {
    return <button className={cssStyle}>Выбрать</button>;
};

export default ButtonChoose;