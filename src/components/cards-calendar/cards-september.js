import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic11 from '../../../static/images/calendar/thumbnails/september/11.webp';
import pic15 from '../../../static/images/calendar/thumbnails/september/15.webp';
import pic16 from '../../../static/images/calendar/thumbnails/september/16.webp';
import pic21 from '../../../static/images/calendar/thumbnails/september/21.webp';
import pic22_01 from '../../../static/images/calendar/thumbnails/september/22-01.webp';
import pic22_02 from '../../../static/images/calendar/thumbnails/september/22-02.webp';
import pic27_01 from '../../../static/images/calendar/thumbnails/september/27-01.webp';
import pic27_02 from '../../../static/images/calendar/thumbnails/september/27-02.webp';
import pic2sunday_01 from '../../../static/images/calendar/thumbnails/september/2sunday-01.webp';
import pic2sunday_02 from '../../../static/images/calendar/thumbnails/september/2sunday-02.webp';
import pic3sunday from '../../../static/images/calendar/thumbnails/september/3sunday.webp';
import picLastSunday from '../../../static/images/calendar/thumbnails/september/last-sunday.webp';

function Day11() {
    const day = '11 Сентября';
    const name = <>День рождения<br/>Всемирного фонда дикой природы (WWF)</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic11}
            fullSizeImage={'september/11.webp'}
        />
    );
}

function Day15() {
    const day = '15 Сентября';
    const name = <>День рождения<br/>Гринпис</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic15}
            fullSizeImage={'september/15.webp'}
        />
    );
}

function Day16() {
    const day = '16 Сентября';
    const name = <>Международный день охраны<br/>озонового слоя</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic16}
            fullSizeImage={'september/16.webp'}
        />
    );
}

function Day21() {
    const day = '21 Сентября';
    const name = <>Международная<br/>Ночь летучих мышей</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic21}
            fullSizeImage={'september/21.webp'}
        />
    );
}

function Day22_01() {
    const day = '22 Сентября';
    const name = <>Всемирный день<br/>без автомобиля</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic22_01}
            fullSizeImage={'september/22-01.webp'}
        />
    );
}

function Day22_02() {
    const day = '22 Сентября';
    const name = <>Всемирный день<br/>защиты слонов</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic22_02}
            fullSizeImage={'september/22-02.webp'}
        />
    );
}

function Day27_01() {
    const day = '27 Сентября';
    const name = <>Всемирный день<br/>туризма</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic27_01}
            fullSizeImage={'september/27-01.webp'}
        />
    );
}

function Day27_02() {
    const day = '27 Сентября';
    const name = <>Международный день<br/>кроликов</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic27_02}
            fullSizeImage={'september/27-02.webp'}
        />
    );
}

function Day2sunday_01() {
    const day = '2-ое воскресенье сентября';
    const name = <>Всемирный день<br/>журавля</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic2sunday_01}
            fullSizeImage={'september/2sunday-01.webp'}
        />
    );
}

function Day2sunday_02() {
    const day = '2-ое воскресенье сентября';
    const name = <>День Байкала</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic2sunday_02}
            fullSizeImage={'september/2sunday-02.webp'}
        />
    );
}

function Day3sunday() {
    const day = '3-е воскресенье сентября День';
    const name = <>День работников леса</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={pic3sunday}
            fullSizeImage={'september/3sunday.webp'}
        />
    );
}

function DayLastSunday() {
    const day = 'Последнее воскресенье сентября';
    const name = <>День амурского тигра и леопарда</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={picLastSunday}
            fullSizeImage={'september/last-sunday.webp'}
        />
    );
}

const cards = {
    Day11,
    Day15,
    Day16,
    Day21,
    Day22_01,
    Day22_02,
    Day27_01,
    Day27_02,
    Day2sunday_01,
    Day2sunday_02,
    DayLastSunday,
    Day3sunday
};

export default cards;