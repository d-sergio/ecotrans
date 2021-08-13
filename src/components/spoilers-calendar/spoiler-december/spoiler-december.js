import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Декабрь';

    const body =
        [
            <Cards.December.Day3 key='CardDecember3'/>,
            <Cards.December.Day5 key='CardDecember5'/>,
            <Cards.December.Day10 key='CardDecember10'/>,
            <Cards.December.Day11 key='CardDecember11'/>,
            <Cards.December.Day15 key='CardDecember15'/>,
            <Cards.December.Day23 key='CardDecember23'/>
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