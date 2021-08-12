import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Ноябрь';

    const body =
        [
            <Cards.November.Day6/>,
            <Cards.November.Day9/>,
            <Cards.November.Day11/>,
            <Cards.November.Day12/>,
            <Cards.November.Day15/>,
            <Cards.November.Day17/>,
            <Cards.November.Day24/>,
            <Cards.November.Day29/>,
            <Cards.November.Day30/>
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