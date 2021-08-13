import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Июнь';

    const body =
        [
            <Cards.June.Day5_01 key='CardJune501'/>,
            <Cards.June.Day5_02 key='CardJune502'/>,
            <Cards.June.Day6 key='CardJune6'/>,
            <Cards.June.Day7 key='CardJune7'/>,
            <Cards.June.Day8 key='CardJune8'/>,
            <Cards.June.Day15 key='CardJune15'/>,
            <Cards.June.Day17 key='CardJune17'/>,
            <Cards.June.Day20 key='CardJune20'/>,
            <Cards.June.Day29 key='CardJune29'/>
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