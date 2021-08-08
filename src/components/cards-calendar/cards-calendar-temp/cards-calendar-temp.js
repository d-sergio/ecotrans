import React from 'react';
import PictureText from '../../../libs/react-components/picture-and-text';
import {container, day, name} from './cards-calendar-temp.module.css';
import AttachPopupCalendar from '../../attach-popup-calendar-temp';

/**Шаблон карточки для календаря
 * 
 * Props:
 * @param {String | Node} day - день (число и месяц, например)
 * @param {String | Node} name - название дня по календарю
 * @param {String} thumb - картинка (миниатюра)
 * @param {String} fullSizeImage - картинка в полном размере. Передаётся
 * дальше в <AttachPopupCalendar>. Открывается как попап
*/
function CardsCalendarTemp(props) {

    /**Текст карточки */
    const text = 
        <>
            <div className={day}>
                {props.day}
            </div>

            <div className={name}>
                {props.name}
            </div>
        </>;

    return(
        <AttachPopupCalendar fullSizeImage={props.fullSizeImage}>

            <div className={container}>
                <PictureText.Over image={props.thumb} text={text}/>
            </div>

        </AttachPopupCalendar>
    );
}

export default CardsCalendarTemp;