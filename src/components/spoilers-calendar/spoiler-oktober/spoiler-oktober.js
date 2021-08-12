import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Октябрь';

    const body =
        [
            <Cards.Oktober.Day1weekends/>,
            <Cards.Oktober.Day1/>,
            <Cards.Oktober.Day5_01/>,
            <Cards.Oktober.Day5_02/>,
            <Cards.Oktober.Day6/>,
            <Cards.Oktober.Day13/>,
            <Cards.Oktober.Day14/>,
            <Cards.Oktober.Day31/>,
            <Cards.Oktober.DayLastThursday/>
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