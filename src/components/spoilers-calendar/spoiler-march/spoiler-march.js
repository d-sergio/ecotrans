import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Март';

    const body =
        [
            <Cards.March.Day1/>,
            <Cards.March.Day3/>,
            <Cards.March.Day14/>,
            <Cards.March.Day15/>,
            <Cards.March.Day20/>,
            <Cards.March.Day21/>,
            <Cards.March.Day22_01/>,
            <Cards.March.Day22_02/>,
            <Cards.March.Day23/>
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