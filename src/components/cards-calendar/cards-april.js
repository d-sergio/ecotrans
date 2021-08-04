import React from 'react';
import CardsCalendarTemp from "./cards-calendar-temp";
import april1 from '../../../static/images/calendar/april/1.webp';
import april5 from '../../../static/images/calendar/april/5.webp';
import april7 from '../../../static/images/calendar/april/7.webp';
import april15 from '../../../static/images/calendar/april/15.webp';
import april18_22 from '../../../static/images/calendar/april/18-22.webp';
import april19 from '../../../static/images/calendar/april/19.webp';

function April1() {
    const day = '1 Апреля';
    const name = <>Международный день<br/>птиц</>;

    return(
        <CardsCalendarTemp day={day} name={name} image={april1}/>
    );
}

function April5() {
    const day = '5 Апреля';
    const name = 'День геолога';

    return(
        <CardsCalendarTemp day={day} name={name} image={april5}/>
    );
}

function April7() {
    const day = '7 Апреля';
    const name = <>Всемирный день<br/>охраны здоровья</>;

    return(
        <CardsCalendarTemp day={day} name={name} image={april7}/>
    );
}

function April15() {
    const day = '15 Апреля';
    const name = <>День экологических<br/>знаний</>;

    return(
        <CardsCalendarTemp day={day} name={name} image={april15}/>
    );
}

function April18_22() {
    const day = '18-22 Апреля';
    const name = 'Марш парков';

    return(
        <CardsCalendarTemp day={day} name={name} image={april18_22}/>
    );
}

function April19() {
    const day = '19 Апреля';
    const name = 'День подснежника';

    return(
        <CardsCalendarTemp day={day} name={name} image={april19}/>
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