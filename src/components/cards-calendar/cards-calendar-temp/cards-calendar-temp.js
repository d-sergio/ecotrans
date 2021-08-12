import React from 'react';
import PictureAndText from '../../../libs/react-components/picture-and-text';
import {container, day, name, gradient} from './cards-calendar-temp.module.css';
import ModalCalendar from '../../modals-calendar-temp';

/**Шаблон карточки для календаря
 * 
 * Props:
 * @param {String | Node} day - день (число и месяц, например)
 * @param {String | Node} name - название дня по календарю
 * @param {String} thumb - картинка (миниатюра)
 * @param {String} fullSizeImage - картинка в полном размере. Передаётся
 * дальше в <ModalCalendar>. Открывается как модальное окно
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
        <ModalCalendar fullSizeImage={props.fullSizeImage} text={text}>

            <div className={container}>
                <PictureAndText.Over
                    image={props.thumb}
                    overlay={<div className={gradient}></div>}
                    text={text}
                />
            </div>

        </ModalCalendar>
    );
}

export default CardsCalendarTemp;