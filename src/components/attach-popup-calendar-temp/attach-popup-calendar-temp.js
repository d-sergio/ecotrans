import React from 'react';
import {backgroundCloseIcon, container, fullSizeImage} from './attach-popup-calendar-temp.module.css';
import AttachPopup from '../../libs/react-components/attach-popup';
import closeIcon from '../../../static/images/calendar/close-popup.svg';

/**Шаблон попапа для календаря (полноразмерная картинка с текстом)
 * 
 * Props:
 * @param {String} fullSizeImage - полноразмерная картинка из календаря для попапа
 */
function AttachPopupCalendarTemp(props) {

    const PopupCalendar = () => (
        <div className={container}>

            <img
                data-close-popup
                className={backgroundCloseIcon}
                src={closeIcon}
                alt='close_icon'
            />

            <img
                className={fullSizeImage}
                src={props.fullSizeImage}
                alt='day'
            />

        </div>
    );

    return(
        <AttachPopup popup={<PopupCalendar/>}>

                {props.children}

        </AttachPopup>
    );
}

export default AttachPopupCalendarTemp;