import React from 'react';
import {backgroundCloseIcon, container} from './popup-calendar.module.css';
import Popup from '../../libs/react-components/popup/popup';
import closeIcon from '../../../static/images/calendar/close-popup.svg';

function PopupCalendar(props) {
    return(
        <Popup
            key={props.isOpen}
            isOpen={props.isOpen}
            closeFunction={props.closeFunction}
        >
            <div className={container}>

                <img
                    className={backgroundCloseIcon}
                    src={closeIcon}
                    alt='close_icon'
                    onClick={props.closeFunction}
                />


                {props.children}

            </div>
        </Popup>
    );
}

export default PopupCalendar;