import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Май';

    const body =
        [
            <Cards.May.Day1_10/>,
            <Cards.May.Day3/>,
            <Cards.May.Day15_01/>,
            <Cards.May.Day15_02/>,
            <Cards.May.Day20/>,
            <Cards.May.Day22/>,
            <Cards.May.Day23/>,
            <Cards.May.Day24/>,
            <Cards.May.Day25/>
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