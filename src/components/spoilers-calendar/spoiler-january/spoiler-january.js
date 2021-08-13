import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Январь';

    const body =
        [
            <Cards.January.Day11 key='CardJanuary11'/>,
            <Cards.January.Day19 key='CardJanuary19'/>,
            <Cards.January.Day20 key='CardJanuary20'/>
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