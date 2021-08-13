import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Март';

    const body =
        [
            <Cards.March.Day1 key='CardMarch1'/>,
            <Cards.March.Day3 key='CardMarch3'/>,
            <Cards.March.Day14 key='CardMarch14'/>,
            <Cards.March.Day15 key='CardMarch15'/>,
            <Cards.March.Day20 key='CardMarch20'/>,
            <Cards.March.Day21 key='CardMarch21'/>,
            <Cards.March.Day22_01 key='CardMarch2201'/>,
            <Cards.March.Day22_02 key='CardMarch2202'/>,
            <Cards.March.Day23 key='CardMarch23'/>
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