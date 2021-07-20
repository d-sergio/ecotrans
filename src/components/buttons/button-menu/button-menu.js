import React from 'react';
import {container, onClose, line, cross} from './button-menu.module.css';

/**Кнопка мобильного меню*/
function ButtonMenu(props) {
    const button = props.open ? <OnOpen/> : <OnClose/>;

    return (
        <div className={container}>
            {button}
        </div>
    );
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