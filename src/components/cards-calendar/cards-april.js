import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import april1 from '../../../static/images/calendar/thumbnails/april/1.webp';
import april5 from '../../../static/images/calendar/thumbnails/april/5.webp';
import april7 from '../../../static/images/calendar/thumbnails/april/7.webp';
import april15 from '../../../static/images/calendar/thumbnails/april/15.webp';
import april18_22 from '../../../static/images/calendar/thumbnails/april/18-22.webp';
import april19 from '../../../static/images/calendar/thumbnails/april/19.webp';

function Day1() {
    const day = '1 Апреля';
    const name = <>Международный день<br/>птиц</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april1}
            fullSizeImage={'april/1.webp'}
        />
    );
}

function Day5() {
    const day = '5 Апреля';
    const name = 'День геолога';

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april5}
            fullSizeImage={'april/5.webp'}
        />
    );
}

function Day7() {
    const day = '7 Апреля';
    const name = <>Всемирный день<br/>охраны здоровья</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april7}
            fullSizeImage={'april/7.webp'}
        />
    );
}

function Day15() {
    const day = '15 Апреля';
    const name = <>День экологических<br/>знаний</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april15}
            fullSizeImage={'april/15.webp'}
        />
    );
}

function Day18_22() {
    const day = '18-22 Апреля';
    const name = 'Марш парков';

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april18_22}
            fullSizeImage={'april/18-22.webp'}
        />
    );
}

function Day19() {
    const day = '19 Апреля';
    const name = 'День подснежника';

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april19}
            fullSizeImage={'april/19.webp'}
        />
    );
}

const april = {
    Day1,
    Day5,
    Day7,
    Day15,
    Day18_22,
    Day19
};

export default april;