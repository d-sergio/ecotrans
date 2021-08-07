import React, { useState } from 'react';
import PictureText from '../../../libs/react-components/picture-and-text';
import {container, day, name, image} from './cards-calendar-temp.module.css';
import PopupCalendar from '../../popup-calendar/popup-calendar';

/**Шаблон карточки для календаря
 * 
 * Props:
 * @param {String | Node} day - день (число и месяц, например)
 * @param {String | Node} name - название дня по календарю
*/
function CardsCalendarTemp(props) {
    const [isOpen, setOpen] = useState(false);

    const text = 
        <>
            <div className={day}>
                {props.day}
            </div>

            <div className={name}>
                {props.name}
            </div>
        </>;

    function showFullCard() {
        if (!isOpen) setOpen(true);
    }

    return(
        <div
            className={container}
            onClick={showFullCard}
        >
            <PopupCalendar
                key={isOpen}
                isOpen={isOpen}
                closeFunction={() => setOpen(false)}
            >
                <img
                    className={image}
                    src={props.fullImage}
                    alt='day'
                />

            </PopupCalendar>

            <PictureText.Over image={props.thumb} text={text}/>
        </div>
    );
}

export default CardsCalendarTemp;