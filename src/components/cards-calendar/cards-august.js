import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic6 from '../../../static/images/calendar/thumbnails/august/6.webp';
import pic3saturday from '../../../static/images/calendar/thumbnails/august/3saturday.webp';
import pic18_31 from '../../../static/images/calendar/thumbnails/august/18(31).webp';

function Day6() {
    const day = '6 Августа';
    const name = <>Всемирный день борьбы<br/>за запрещение ядерного оружия<br/>(День Хиросимы)</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic6}
            fullSizeImage={'august/6.webp'}
        />
    );
}

function Day3saturday() {
    const day = '3-я суббота августа';
    const name = <>Всемирный день бездомных<br/>животных</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic3saturday}
            fullSizeImage={'august/3saturday.webp'}
        />
    );
}

function Day18_31() {
    const day = '18 (31) Августа';
    const name = <>День лошадей</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic18_31}
            fullSizeImage={'august/18(31).webp'}
        />
    );
}
const cards = {
    Day6,
    Day3saturday,
    Day18_31
};

export default cards;