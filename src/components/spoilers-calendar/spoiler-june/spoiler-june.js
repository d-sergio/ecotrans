import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Июнь';

    const body =
        [
            <Cards.June.Day5_01/>,
            <Cards.June.Day5_02/>,
            <Cards.June.Day6/>,
            <Cards.June.Day7/>,
            <Cards.June.Day8/>,
            <Cards.June.Day15/>,
            <Cards.June.Day17/>,
            <Cards.June.Day20/>,
            <Cards.June.Day29/>
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