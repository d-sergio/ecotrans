import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import april1 from '../../../static/images/calendar/april/1.webp';
import april5 from '../../../static/images/calendar/april/5.webp';
import april7 from '../../../static/images/calendar/april/7.webp';
import april15 from '../../../static/images/calendar/april/15.webp';
import april18_22 from '../../../static/images/calendar/april/18-22.webp';
import april19 from '../../../static/images/calendar/april/19.webp';

import april1Full from '../../../static/images/calendar/april/full-1.png';

function April1() {
    const day = '1 Апреля';
    const name = <>Международный день<br/>птиц</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april1}
            fullImage={april1Full}
        />
    );
}

function April5() {
    const day = '5 Апреля';
    const name = 'День геолога';

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april5}
            fullImage={april1Full}
        />
    );
}

function April7() {
    const day = '7 Апреля';
    const name = <>Всемирный день<br/>охраны здоровья</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april7}
            fullImage={april1Full}
        />
    );
}

function April15() {
    const day = '15 Апреля';
    const name = <>День экологических<br/>знаний</>;

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april15}
            fullImage={april1Full}
        />
    );
}

function April18_22() {
    const day = '18-22 Апреля';
    const name = 'Марш парков';

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april18_22}
            fullImage={april1Full}
        />
    );
}

function April19() {
    const day = '19 Апреля';
    const name = 'День подснежника';

    return(
        <CardsCalendarTemp
            day={day}
            name={name}
            thumb={april19}
            fullImage={april1Full}
        />
    );
}

const april = {
    April1,
    April5,
    April7,
    April15,
    April18_22,
    April19
};

export default april;