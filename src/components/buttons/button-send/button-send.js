import React from 'react';
import {mobile, desktop, common} from './button-send.module.css';
import {buttonsCommon} from '../common-buttons.module.css';

/**Кнопка Отправить
 * 
 * Props:
 * @param {Boolean} mobile - мобильный вариант, если true
 */
function ButtonSend(props) {
    const viewMode = props.mobile === true ? mobile : desktop;
    const cssStyle = [viewMode, buttonsCommon, common].join(' ');

    return(
        <button
            form={props.form}
            type="submit"
            className={cssStyle}
            >
                Отправить
        </button>
    );
};

export default ButtonSend;