import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic6 from '../../../static/images/calendar/thumbnails/november/6.webp';
import pic9 from '../../../static/images/calendar/thumbnails/november/9.webp';
import pic11 from '../../../static/images/calendar/thumbnails/november/11.webp';
import pic12 from '../../../static/images/calendar/thumbnails/november/12.webp';
import pic15 from '../../../static/images/calendar/thumbnails/november/15.webp';
import pic17 from '../../../static/images/calendar/thumbnails/november/17.webp';
import pic24 from '../../../static/images/calendar/thumbnails/november/24.webp';
import pic29 from '../../../static/images/calendar/thumbnails/november/29.webp';
import pic30 from '../../../static/images/calendar/thumbnails/november/30.webp';

function Day6() {
    const day = '6 Ноября';
    const name = <>Международный день предотвращения<br/>эксплуатации окружающей<br/>среды во время войны</>;

    return(
        <CardsCalendarTemp
            key='novemer6'
            day={day}
            name={name}
            thumb={pic6}
            fullSizeImage={'november/6.webp'}
        />
    );
}

function Day9() {
    const day = '9 Ноября';
    const name = <>День антиядерных<br/>акций</>;

    return(
        <CardsCalendarTemp
            key='novemer9'
            day={day}
            name={name}
            thumb={pic9}
            fullSizeImage={'november/9.webp'}
        />
    );
}

function Day11() {
    const day = '11 Ноября';
    const name = <>Международный день<br/>энергосбережения</>;

    return(
        <CardsCalendarTemp
            key='novemer11'
            day={day}
            name={name}
            thumb={pic11}
            fullSizeImage={'november/11.webp'}
        />
    );
}

function Day12() {
    const day = '12 Ноября';
    const name = <> Синичкин день</>;

    return(
        <CardsCalendarTemp
            key='novemer12'
            day={day}
            name={name}
            thumb={pic12}
            fullSizeImage={'november/12.webp'}
        />
    );
}

function Day15() {
    const day = '15 Ноября';
    const name = <>День вторичной<br/>переработки</>;

    return(
        <CardsCalendarTemp
            key='novemer15'
            day={day}
            name={name}
            thumb={pic15}
            fullSizeImage={'november/15.webp'}
        />
    );
}

function Day17() {
    const day = '17 Ноября';
    const name = <>День черного кота<br/>(Италия)</>;

    return(
        <CardsCalendarTemp
            key='novemer17'
            day={day}
            name={name}
            thumb={pic17}
            fullSizeImage={'november/17.webp'}
        />
    );
}

function Day24() {
    const day = '24 Ноября';
    const name = <>День моржа</>;

    return(
        <CardsCalendarTemp
            key='novemer24'
            day={day}
            name={name}
            thumb={pic24}
            fullSizeImage={'november/24.webp'}
        />
    );
}

function Day29() {
    const day = '29 Ноября';
    const name = <>День создания Всероссийского<br/>общества охраны природы (ВООП)</>;

    return(
        <CardsCalendarTemp
            key='novemer29'
            day={day}
            name={name}
            thumb={pic29}
            fullSizeImage={'november/29.webp'}
        />
    );
}

function Day30() {
    const day = '30 Ноября';
    const name = <>Международный день<br/>домашних животных</>;

    return(
        <CardsCalendarTemp
            key='novemer30'
            day={day}
            name={name}
            thumb={pic30}
            fullSizeImage={'november/30.webp'}
        />
    );
}

const cards = {
    Day11,
    Day12,
    Day15,
    Day17,
    Day24,
    Day29,
    Day30,
    Day6,
    Day9
};

export default cards;