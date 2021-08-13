import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Ноябрь';

    const body =
        [
            <Cards.November.Day6 key='CardNovember6'/>,
            <Cards.November.Day9 key='CardNovember9'/>,
            <Cards.November.Day11 key='CardNovember11'/>,
            <Cards.November.Day12 key='CardNovember12'/>,
            <Cards.November.Day15 key='CardNovember15'/>,
            <Cards.November.Day17 key='CardNovember17'/>,
            <Cards.November.Day24 key='CardNovember24'/>,
            <Cards.November.Day29 key='CardNovember29'/>,
            <Cards.November.Day30 key='CardNovember30'/>
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