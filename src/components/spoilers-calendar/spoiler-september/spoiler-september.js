import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Сентябрь';

    const body =
        [
            <Cards.September.Day11/>,
            <Cards.September.Day15/>,
            <Cards.September.Day16/>,
            <Cards.September.Day21/>,
            <Cards.September.Day22_01/>,
            <Cards.September.Day22_02/>,
            <Cards.September.Day27_01/>,
            <Cards.September.Day27_02/>,
            <Cards.September.Day2sunday_01/>,
            <Cards.September.Day2sunday_02/>,
            <Cards.September.Day3sunday/>,
            <Cards.September.DayLastSunday/>
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