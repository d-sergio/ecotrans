import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic3 from '../../../static/images/calendar/thumbnails/december/3.webp';
import pic5 from '../../../static/images/calendar/thumbnails/december/5.webp';
import pic10 from '../../../static/images/calendar/thumbnails/december/10.webp';
import pic11 from '../../../static/images/calendar/thumbnails/december/11.webp';
import pic15 from '../../../static/images/calendar/thumbnails/december/15.webp';
import pic23 from '../../../static/images/calendar/thumbnails/december/23.webp';

function Day3() {
    const day = '3 Декабря';
    const name = <>Международный день<br/>борьбы с пестицидами</>;

    return(
        <CardsCalendarTemp
            key='december3'
            day={day}
            name={name}
            thumb={pic3}
            fullSizeImage={'december/3.webp'}
        />
    );
}

function Day5() {
    const day = '5 Декабря';
    const name = <>Международный день<br/>волонтеров</>;

    return(
        <CardsCalendarTemp
            key='december5'
            day={day}
            name={name}
            thumb={pic5}
            fullSizeImage={'december/5.webp'}
        />
    );
}

function Day10() {
    const day = '10 Декабря';
    const name = <>Международный день акций<br/>за принятие Декларации<br/>прав животных</>;

    return(
        <CardsCalendarTemp
            key='december10'
            day={day}
            name={name}
            thumb={pic10}
            fullSizeImage={'december/10.webp'}
        />
    );
}

function Day11() {
    const day = '11 Декабря';
    const name = <>Международный день<br/>гор</>;

    return(
        <CardsCalendarTemp
            key='december11'
            day={day}
            name={name}
            thumb={pic11}
            fullSizeImage={'december/11.webp'}
        />
    );
}

function Day15() {
    const day = '15 Декабря';
    const name = <>День образования организации ООН<br/>по охране окружающей среды (ЮНЕП)</>;

    return(
        <CardsCalendarTemp
            key='december15'
            day={day}
            name={name}
            thumb={pic15}
            fullSizeImage={'december/15.webp'}
        />
    );
}

function Day23() {
    const day = '23 Декабря';
    const name = <>Международный день<br/>сохранения биоразнообразия</>;

    return(
        <CardsCalendarTemp
            key='december23'
            day={day}
            name={name}
            thumb={pic23}
            fullSizeImage={'december/23.webp'}
        />
    );
}

const cards = {
    Day3,
    Day5,
    Day10,
    Day11,
    Day15,
    Day23
};

export default cards;