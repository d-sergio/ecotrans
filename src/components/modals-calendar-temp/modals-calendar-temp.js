import React from 'react';
import {backgroundCloseIcon, container, fullSizeImage, text} from './modals-calendar-temp.module.css';
import Modal from '../../libs/react-components/modals';
import closeIcon from '../../../static/images/calendar/cross-calend-modal.svg';
import PictureAndText from '../../libs/react-components/picture-and-text';

/**Шаблон модального окна для календаря (полноразмерная картинка с текстом)
 * 
 * Props:
 * @param {String} fullSizeImage - полноразмерная картинка из календаря для
 * модального окна
 * @param {Node | String} - текст, отображаемый поверх картинки
 */
function ModalCalendarTemp(props) {

    const ModalCalendar = () => (
        <div className={container}>

            <img
                data-close-modal
                className={backgroundCloseIcon}
                src={closeIcon}
                alt='close_icon'
            />

            <div className={text}>
                <PictureAndText.Over image={props.fullSizeImage} text={props.text}/>
            </div>
        </div>
    );

    return(
        <Modal.Attach modal={<ModalCalendar/>}>

                {props.children}

        </Modal.Attach>
    );
}

export default ModalCalendarTemp;