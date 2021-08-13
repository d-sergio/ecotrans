import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import pic19_01 from '../../../static/images/calendar/thumbnails/february/19-01.webp';
import pic19_02 from '../../../static/images/calendar/thumbnails/february/19-02.webp';
import pic27 from '../../../static/images/calendar/thumbnails/february/27.webp';

function Day19_01() {
    const day = '19 Февраля';
    const name = <>Всемирный день<br/>защиты морских<br/>млекопитающих (День кита)</>;

    return(
        <CardsCalendarTemp
            key='february1901'
            day={day}
            name={name}
            thumb={pic19_01}
            fullSizeImage={'february/19-01.webp'}
        />
    );
}

function Day19_02() {
    const day = '19 Февраля';
    const name = <>День орнитолога</>;

    return(
        <CardsCalendarTemp
            key='february1902'
            day={day}
            name={name}
            thumb={pic19_02}
            fullSizeImage={'february/19-02.webp'}
        />
    );
}

function Day27() {
    const day = '27 Февраля';
    const name = <>Международный день<br/>полярного медведя</>;

    return(
        <CardsCalendarTemp
            key='february27'
            day={day}
            name={name}
            thumb={pic27}
            fullSizeImage={'february/27.webp'}
        />
    );
}

const cards = {
    Day19_01,
    Day19_02,
    Day27
};

export default cards;