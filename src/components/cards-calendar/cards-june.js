import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic5_01 from '../../../static/images/calendar/thumbnails/june/5-01.webp';
import pic5_02 from '../../../static/images/calendar/thumbnails/june/5-02.webp';
import pic6 from '../../../static/images/calendar/thumbnails/june/6.webp';
import pic7 from '../../../static/images/calendar/thumbnails/june/7.webp';
import pic8 from '../../../static/images/calendar/thumbnails/june/8.webp';
import pic15 from '../../../static/images/calendar/thumbnails/june/15.webp';
import pic17 from '../../../static/images/calendar/thumbnails/june/17.webp';
import pic20 from '../../../static/images/calendar/thumbnails/june/20.webp';
import pic29 from '../../../static/images/calendar/thumbnails/june/29.webp';

function Day5_01() {
    const day = '5 Июня';
    const name = <>Всемирный день охраны<br/>окружающей среды</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic5_01}
            fullSizeImage={'june/5-01.webp'}
        />
    );
}

function Day5_02() {
    const day = '5 Июня';
    const name = <>День эколога</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic5_02}
            fullSizeImage={'june/5-02.webp'}
        />
    );
}

function Day6() {
    const day = '6 Июня';
    const name = <>Международный день<br/>очистки водоёмов</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic6}
            fullSizeImage={'june/6.webp'}
        />
    );
}

function Day7() {
    const day = '7 Июня';
    const name = <>День мелиоратора</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic7}
            fullSizeImage={'june/7.webp'}
        />
    );
}

function Day8() {
    const day = '8 Июня';
    const name = <>Всемирный день океанов</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic8}
            fullSizeImage={'june/8.webp'}
        />
    );
}

function Day15() {
    const day = '15 Июня';
    const name = <>День создания юннатского<br/>движения в России</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic15}
            fullSizeImage={'june/15.webp'}
        />
    );
}

function Day17() {
    const day = '17 Июня';
    const name = <>Всемирный день по борьбе<br/>с опустыниванием и засухой</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic17}
            fullSizeImage={'june/17.webp'}
        />
    );
}

function Day20() {
    const day = '20 Июня';
    const name = <>Всемирный день защиты<br/>слонов в зоопарках</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic20}
            fullSizeImage={'june/20.webp'}
        />
    );
}

function Day29() {
    const day = '29 Июня';
    const name = <>Международный день<br/>тропиков</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic29}
            fullSizeImage={'june/29.webp'}
        />
    );
}

const cards = {
    Day5_01,
    Day5_02,
    Day6,
    Day7,
    Day8,
    Day15,
    Day17,
    Day20,
    Day29
};

export default cards;