import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Апрель';

    const body =
        [
            <Cards.April.Day1 key='CardApril1'/>,
            <Cards.April.Day5 key='CardApril5'/>,
            <Cards.April.Day7 key='CardApril7'/>,
            <Cards.April.Day15 key='CardApril15'/>,
            <Cards.April.Day18_22 key='CardApril18_22'/>,
            <Cards.April.Day19 key='CardApril19'/>
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