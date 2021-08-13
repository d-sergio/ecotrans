import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Май';

    const body =
        [
            <Cards.May.Day1_10 key='CardMay110'/>,
            <Cards.May.Day3 key='CardMay3'/>,
            <Cards.May.Day15_01 key='CardMay1501'/>,
            <Cards.May.Day15_02 key='CardMay1502'/>,
            <Cards.May.Day20 key='CardMay20'/>,
            <Cards.May.Day22 key='CardMay22'/>,
            <Cards.May.Day23 key='CardMay23'/>,
            <Cards.May.Day24 key='CardMay24'/>,
            <Cards.May.Day25 key='CardMay25'/>
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