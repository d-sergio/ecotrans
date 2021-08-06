import React from 'react';
import {container} from './spoiler-april.module.css';
import Cards from '../../cards-calendar';
import SpoilerCalendarTemp from '../spoiler-calendar-temp';

function SpoilerApril() {
    const text = 'Апрель';

    const body =
        [
            <Cards.April1/>,
            <Cards.April5/>,
            <Cards.April7/>,
            <Cards.April15/>,
            <Cards.April18_22/>,
            <Cards.April19/>
        ];


    return(
        <SpoilerCalendarTemp
            className={container}
            title={text}
            body={body}
        />
    );
}

export default SpoilerApril;