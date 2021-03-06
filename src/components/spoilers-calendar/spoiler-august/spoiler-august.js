import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Август';

    const body =
        [
            <Cards.August.Day6 key='CardAugust6'/>,
            <Cards.August.Day3saturday key='CardAugust3saturday'/>,
            <Cards.August.Day18_31 key='CardAugust18_31'/>
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