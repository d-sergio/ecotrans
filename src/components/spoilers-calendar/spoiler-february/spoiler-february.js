import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Февраль';

    const body =
        [
            <Cards.February.Day19_01 key='CardFebruary1901'/>,
            <Cards.February.Day19_02 key='CardFebruary1902'/>,
            <Cards.February.Day27 key='CardFebruary27'/>
        ];


    return(
        <SpoilerCalendarTemp
            className={container}
            title={text}
            body={body}
        />
    );
}

export default Spoiler;