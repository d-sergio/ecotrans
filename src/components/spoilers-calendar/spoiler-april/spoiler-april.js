import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Апрель';

    const body =
        [
            <Cards.April.Day1/>,
            <Cards.April.Day5/>,
            <Cards.April.Day7/>,
            <Cards.April.Day15/>,
            <Cards.April.Day18_22/>,
            <Cards.April.Day19/>
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