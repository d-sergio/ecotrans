import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic11 from '../../../static/images/calendar/thumbnails/january/11.webp';
import pic19 from '../../../static/images/calendar/thumbnails/january/19.webp';
import pic20 from '../../../static/images/calendar/thumbnails/january/20.webp';

function Day11() {
    const day = '11 Января';
    const name = <>Всемирный день<br/>заповедников</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic11}
            fullSizeImage={'january/11.webp'}
        />
    );
}

function Day19() {
    const day = '19 Января';
    const name = <>Всемирный день<br/>снега</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic19}
            fullSizeImage={'january/19.webp'}
        />
    );
}

function Day20() {
    const day = '20 Января';
    const name = <>День осведомленности<br/>о пингвинах</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic20}
            fullSizeImage={'january/20.webp'}
        />
    );
}

const cards = {
    Day11,
    Day19,
    Day20
};

export default cards;