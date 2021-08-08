import React from 'react';
import {container} from './attach-popup.module.css';

/**
 * По умолчанию попап закрывается кликом по пространству вокруг него. Это можно
 * изменить через пропс defaultClose (см. ниже)
 * 
 * Props:
 * 
 * @param {boolean} defaultClose - true (по умолчанию) разрешает закрывать попап
 * кликом по пространству вокруг него
 *
 */
function Popup(props) {
    /**Закрыть popup кликом по пустому пространству вокруг него */
    function closePopup(e) {
        if (props.defaultClose
            && !e.target.dataset.closePopup
            && !e.target.dataset.closeEmpty) {
                //закрытие попапа кликом по пустому пространству разрешено
                return;

        } else if (!props.defaultClose&& !e.target.dataset.closePopup) {

            //закрытие попапа кликом по пустому пространству запрещено
            return;
        }

        if (props.display === 'flex') props.closePopup();
    }

    return(
        <div
            data-close-empty
            key={props.display}
            style={{display: props.display}}
            className={props.className || container}
            onClick={closePopup}
        >
            {props.popup}
        </div>
    );
}

export default Popup;

Popup.defaulProps = {
    defaultClose: true,
    popup: <div style={{backgroundColor: 'white'}}>Hello, world!</div>,

};