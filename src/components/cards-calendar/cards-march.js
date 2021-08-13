import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic1 from '../../../static/images/calendar/thumbnails/march/1.webp';
import pic3 from '../../../static/images/calendar/thumbnails/march/3.webp';
import pic14 from '../../../static/images/calendar/thumbnails/march/14.webp';
import pic15 from '../../../static/images/calendar/thumbnails/march/15.webp';
import pic20 from '../../../static/images/calendar/thumbnails/march/20.webp';
import pic21 from '../../../static/images/calendar/thumbnails/march/21.webp';
import pic22_01 from '../../../static/images/calendar/thumbnails/march/22-01.webp';
import pic22_02 from '../../../static/images/calendar/thumbnails/march/22-02.webp';
import pic23 from '../../../static/images/calendar/thumbnails/march/23.webp';

function Day1() {
    const day = '1 Марта';
    const name = <>Всемирный день<br/>кошек</>;

    return(
        <CardsCalendarTemp
            key='march1'
            day={day}
            name={name}
            thumb={pic1}
            fullSizeImage={'march/1.webp'}
        />
    );
}

function Day3() {
    const day = '3 Марта';
    const name = <>Всемирный день<br/>дикой природы</>;

    return(
        <CardsCalendarTemp
            key='march3'
            day={day}
            name={name}
            thumb={pic3}
            fullSizeImage={'march/3.webp'}
        />
    );
}

function Day14() {
    const day = '14 Марта';
    const name = <>Международный день действий<br/>против плотин</>;

    return(
        <CardsCalendarTemp
            key='march14'
            day={day}
            name={name}
            thumb={pic14}
            fullSizeImage={'march/14.webp'}
        />
    );
}

function Day15() {
    const day = '15 Марта';
    const name = <>Международный день<br/>защиты бельков</>;

    return(
        <CardsCalendarTemp
            key='march15'
            day={day}
            name={name}
            thumb={pic15}
            fullSizeImage={'march/15.webp'}
        />
    );
}

function Day20() {
    const day = '20 Марта';
    const name = <>День Земли</>;

    return(
        <CardsCalendarTemp
            key='march20'
            day={day}
            name={name}
            thumb={pic20}
            fullSizeImage={'march/20.webp'}
        />
    );
}

function Day21() {
    const day = '21 Марта';
    const name = <>Международный день леса</>;

    return(
        <CardsCalendarTemp
            key='march21'
            day={day}
            name={name}
            thumb={pic21}
            fullSizeImage={'march/21.webp'}
        />
    );
}

function Day22_01() {
    const day = '22 Марта';
    const name = <>Международный день<br/>Балтийского моря</>;

    return(
        <CardsCalendarTemp
            key='march2201'
            day={day}
            name={name}
            thumb={pic22_01}
            fullSizeImage={'march/22-01.webp'}
        />
    );
}

function Day22_02() {
    const day = '22 Марта';
    const name = <>Всемирный день водных ресурсов<br/>(День воды)</>;

    return(
        <CardsCalendarTemp
            key='march2202'
            day={day}
            name={name}
            thumb={pic22_02}
            fullSizeImage={'march/22-02.webp'}
        />
    );
}

function Day23() {
    const day = '23 Марта';
    const name = <>Всемирный метеорологический день и<br/>День работников Гидрометеорологической<br/>службы России</>;

    return(
        <CardsCalendarTemp
            key='march23'
            day={day}
            name={name}
            thumb={pic23}
            fullSizeImage={'march/23.webp'}
        />
    );
}

const cards = {
    Day1,
    Day3,
    Day14,
    Day15,
    Day20,
    Day21,
    Day22_01,
    Day22_02,
    Day23
};

export default cards;