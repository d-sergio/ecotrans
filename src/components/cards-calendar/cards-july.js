import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic4 from '../../../static/images/calendar/thumbnails/july/4.webp';
import pic23 from '../../../static/images/calendar/thumbnails/july/23.webp';
import pic29 from '../../../static/images/calendar/thumbnails/july/29.webp';

function Day4() {
    const day = '4 Июля';
    const name = <>Международный день<br/>дельфинов – пленников</>;

    return(
        <CardsCalendarTemp
            key='july4'
            day={day}
            name={name}
            thumb={pic4}
            fullSizeImage={'july/4.webp'}
        />
    );
}

function Day23() {
    const day = '23 Июля';
    const name = <>Всемирный день<br/>китов и дельфинов</>;

    return(
        <CardsCalendarTemp
            key='july23'
            day={day}
            name={name}
            thumb={pic23}
            fullSizeImage={'july/23.webp'}
        />
    );
}

function Day29() {
    const day = '29 Июля';
    const name = <>Международный день<br/>тигра</>;

    return(
        <CardsCalendarTemp
            key='july29'
            day={day}
            name={name}
            thumb={pic29}
            fullSizeImage={'july/29.webp'}
        />
    );
}

const cards = {
    Day4,
    Day23,
    Day29
};

export default cards;