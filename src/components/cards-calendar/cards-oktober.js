import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic1weekends from '../../../static/images/calendar/thumbnails/oktober/1weekends.webp';
import pic1 from '../../../static/images/calendar/thumbnails/oktober/1.webp';
import pic5_01 from '../../../static/images/calendar/thumbnails/oktober/5-01.webp';
import pic5_02 from '../../../static/images/calendar/thumbnails/oktober/5-02.webp';
import pic6 from '../../../static/images/calendar/thumbnails/oktober/6.webp';
import pic13 from '../../../static/images/calendar/thumbnails/oktober/13.webp';
import pic14 from '../../../static/images/calendar/thumbnails/oktober/14.webp';
import pic31 from '../../../static/images/calendar/thumbnails/oktober/31.webp';
import picLastThursday from '../../../static/images/calendar/thumbnails/oktober/last-thursday.webp';

function Day1weekends() {
    const day = 'Первые выходные октября';
    const name = <>Международные дни<br/>наблюдения птиц</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic1weekends}
            fullSizeImage={'oktober/1weekends.webp'}
        />
    );
}

function Day1() {
    const day = '1 Октября';
    const name = <>Всемирный день<br/>вегетарианства</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic1}
            fullSizeImage={'oktober/1.webp'}
        />
    );
}

function Day5_01() {
    const day = '5 Октября';
    const name = <>Всемирный день<br/>защиты животных</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic5_01}
            fullSizeImage={'oktober/5-01.webp'}
        />
    );
}

function Day5_02() {
    const day = '5 Октября';
    const name = <>День образования<br/>Международного союза<br/>охраны природы</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic5_02}
            fullSizeImage={'oktober/5-02.webp'}
        />
    );
}

function Day6() {
    const day = '6 Октября';
    const name = <>Всемирный день<br/>охраны мест обитания</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic6}
            fullSizeImage={'oktober/6.webp'}
        />
    );
}

function Day13() {
    const day = '13 Октября';
    const name = <>Международный день<br/>уменьшения опасности бедствий</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic13}
            fullSizeImage={'oktober/13.webp'}
        />
    );
}

function Day14() {
    const day = '14 Октября';
    const name = <>День работников<br/>заповедного дела</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic14}
            fullSizeImage={'oktober/14.webp'}
        />
    );
}

function Day31() {
    const day = '31 Октября';
    const name = <>Международный День<br/>Черного моря</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic31}
            fullSizeImage={'oktober/31.webp'}
        />
    );
}

function DayLastThursday() {
    const day = 'Последний четверг октября';
    const name = <>Международный день<br/>без бумаги</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={picLastThursday}
            fullSizeImage={'oktober/last-thursday.webp'}
        />
    );
}

const cards = {
    Day1,
    Day13,
    Day14,
    Day1weekends,
    Day31,
    Day5_01,
    Day5_02,
    Day6,
    DayLastThursday
};

export default cards;