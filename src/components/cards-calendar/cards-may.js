import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic1_10 from '../../../static/images/calendar/thumbnails/may/1-10.webp';
import pic3 from '../../../static/images/calendar/thumbnails/may/3.webp';
import pic15_01 from '../../../static/images/calendar/thumbnails/may/15-01.webp';
import pic15_02 from '../../../static/images/calendar/thumbnails/may/15-02.webp';
import pic20 from '../../../static/images/calendar/thumbnails/may/20.webp';
import pic22 from '../../../static/images/calendar/thumbnails/may/22.webp';
import pic23 from '../../../static/images/calendar/thumbnails/may/23.webp';
import pic24 from '../../../static/images/calendar/thumbnails/may/24.webp';
import pic25 from '../../../static/images/calendar/thumbnails/may/25.webp';

function Day1_10() {
    const day = '1-10 Мая';
    const name = <>Весенняя декада<br/>наблюдений птиц</>;

    return(
        <CardsCalendarTemp
            key='may110'
            day={day}
            name={name}
            thumb={pic1_10}
            fullSizeImage={'may/1-10.webp'}
        />
    );
}

function Day3() {
    const day = '3 Мая';
    const name = <>День Солнца</>;

    return(
        <CardsCalendarTemp
            key='may3'
            day={day}
            name={name}
            thumb={pic3}
            fullSizeImage={'may/3.webp'}
        />
    );
}

function Day15_01() {
    const day = '15 Мая';
    const name = <>Международный день<br/>климата</>;

    return(
        <CardsCalendarTemp
            key='may1501'
            day={day}
            name={name}
            thumb={pic15_01}
            fullSizeImage={'may/15-01.webp'}
        />
    );
}

function Day15_02() {
    const day = '15 Мая';
    const name = <>Единые дни действий в защиту<br/>малых рек и водоемов</>;

    return(
        <CardsCalendarTemp
            key='may1502'
            day={day}
            name={name}
            thumb={pic15_02}
            fullSizeImage={'may/15-02.webp'}
        />
    );
}

function Day20() {
    const day = '20 Мая';
    const name = <>День Волги</>;

    return(
        <CardsCalendarTemp
            key='may20'
            day={day}
            name={name}
            thumb={pic20}
            fullSizeImage={'may/20.webp'}
        />
    );
}

function Day22() {
    const day = '22 Мая';
    const name = <>Международный день сохранения<br/>биологического разнообразия<br/>(флоры и фауны Земли)</>;

    return(
        <CardsCalendarTemp
            key='may22'
            day={day}
            name={name}
            thumb={pic22}
            fullSizeImage={'may/22.webp'}
        />
    );
}

function Day23() {
    const day = '23 Мая';
    const name = <>Всемирный день<br/>черепахи</>;

    return(
        <CardsCalendarTemp
            key='may23'
            day={day}
            name={name}
            thumb={pic23}
            fullSizeImage={'may/23.webp'}
        />
    );
}

function Day24() {
    const day = '24 Мая';
    const name = <>Европейский день<br/>парков</>;

    return(
        <CardsCalendarTemp
            key='may24'
            day={day}
            name={name}
            thumb={pic24}
            fullSizeImage={'may/24.webp'}
        />
    );
}

function Day25() {
    const day = '25 Мая';
    const name = <>День Нерпёнка<br/>(Иркутская область)</>;

    return(
        <CardsCalendarTemp
            key='may25'
            day={day}
            name={name}
            thumb={pic25}
            fullSizeImage={'may/25.webp'}
        />
    );
}

const cards = {
    Day1_10,
    Day3,
    Day15_01,
    Day15_02,
    Day20,
    Day22,
    Day23,
    Day24,
    Day25
};

export default cards;