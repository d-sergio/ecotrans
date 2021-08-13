import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Октябрь';

    const body =
        [
            <Cards.Oktober.Day1weekends key='CardOktober1weekends'/>,
            <Cards.Oktober.Day1 key='CardOktober1'/>,
            <Cards.Oktober.Day5_01 key='CardOktober501'/>,
            <Cards.Oktober.Day5_02 key='CardOktober502'/>,
            <Cards.Oktober.Day6 key='CardOktober6'/>,
            <Cards.Oktober.Day13 key='CardOktober13'/>,
            <Cards.Oktober.Day14 key='CardOktober14'/>,
            <Cards.Oktober.Day31 key='CardOktober31'/>,
            <Cards.Oktober.DayLastThursday key='CardOktoberLastThursday'/>
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