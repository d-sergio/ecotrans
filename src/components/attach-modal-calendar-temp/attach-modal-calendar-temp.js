import React from 'react';
import {backgroundCloseIcon, container, fullSizeImage} from './attach-modal-calendar-temp.module.css';
import Modal from '../../libs/react-components/modals';
import closeIcon from '../../../static/images/calendar/cross-calend-modal.svg';

/**Шаблон модального окна для календаря (полноразмерная картинка с текстом)
 * 
 * Props:
 * @param {String} fullSizeImage - полноразмерная картинка из календаря для
 * модального окна
 */
function AttachModalCalendarTemp(props) {

    const ModalCalendar = () => (
        <div className={container}>

            <img
                data-close-modal
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
        <Modal.Attach modal={<ModalCalendar/>}>

                {props.children}

        </Modal.Attach>
    );
}

export default AttachModalCalendarTemp;