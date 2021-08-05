import React from 'react';
import PictureText from '../../../libs/react-components/picture-and-text';
import {container, day, name} from './cards-calendar-temp.module.css';

/**Шаблон карточки для календаря
 * 
 * Props:
 * @param {String | Node} day - день (число и месяц, например)
 * @param {String | Node} name - название дня по календарю
*/
function CardsCalendarTemp(props) {
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
        <div className={container}>
            <PictureText.Over image={props.image} text={text}/>
        </div>
    );
}

export default CardsCalendarTemp;