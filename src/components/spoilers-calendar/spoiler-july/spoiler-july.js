import React from 'react';
import {container} from '../spoilers-calendar-common.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function Spoiler() {
    const text = 'Июль';

    const body =
        [
            <Cards.July.Day4 key='CardJuly4'/>,
            <Cards.July.Day23 key='CardJuly23'/>,
            <Cards.July.Day29 key='CardJuly29'/>
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