import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Сентябрь';

    const body =
        [
            <Cards.September.Day11 key='CardSeptemer11'/>,
            <Cards.September.Day15 key='CardSeptemer15'/>,
            <Cards.September.Day16 key='CardSeptemer16'/>,
            <Cards.September.Day21 key='CardSeptemer21'/>,
            <Cards.September.Day22_01 key='CardSeptemer2201'/>,
            <Cards.September.Day22_02 key='CardSeptemer2202'/>,
            <Cards.September.Day27_01 key='CardSeptemer2701'/>,
            <Cards.September.Day27_02 key='CardSeptemer2702'/>,
            <Cards.September.Day2sunday_01 key='CardSeptemer2sunday_01'/>,
            <Cards.September.Day2sunday_02 key='CardSeptemer2sunday_02'/>,
            <Cards.September.Day3sunday key='CardSeptemer3sunday'/>,
            <Cards.September.DayLastSunday key='CardSeptemerLastSunday'/>
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