import React from 'react';
import {style} from './button-subscribe.module.css';
import {buttonsStyle} from '../common-buttons.module.css';

const cssStyle = [style, buttonsStyle].join(' ');

const ButtonSubscribe = () => {
    return <button className={cssStyle}>Подписаться</button>;
};

export default ButtonSubscribe;