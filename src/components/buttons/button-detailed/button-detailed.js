import React, {useContext} from 'react';
import ViewContext from "../../root-layout/view-context";
import {style} from './button-detailed.module.css';
import {buttonsStyle} from '../common-buttons.module.css';

const cssStyle = [style, buttonsStyle].join(' ');

const ButtonDetailed = () => {
    const view = useContext(ViewContext);

    const buttonText = view === 'mobile' ? 'Смотреть' : 'Подробнее'
   
    return <button className={cssStyle}>{buttonText}</button>;
};

export default ButtonDetailed;