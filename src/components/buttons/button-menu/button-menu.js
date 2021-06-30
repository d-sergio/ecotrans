import React, {useState} from 'react';
import {container, onClose, line, cross} from './button-menu.module.css';

/**Кнопка мобильного меню*/
function ButtonMenu() {
    const [isOpen, setState] = useState(false);

    const button = isOpen ? <OnOpen/> : <OnClose/>;
    return <div onClick={() => setState(!isOpen)} className={container}>{button}</div>;
}

function OnClose() {
    return(
        <div className={onClose}>
            <div className={line}></div>
            <div className={line}></div>
            <div className={line}></div>
        </div>
    );
}

function OnOpen() {
    return(
        <div className={cross}></div>
    );
}

export default ButtonMenu;