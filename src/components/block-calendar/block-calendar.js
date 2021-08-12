import React from 'react';
import {mainContainer} from '../../common-styles/containers.module.css';
import {spoilerTitle} from '../../common-styles/title.module.css';
import {container} from './block-calendar.module.css';
import Spoilers from '../spoilers-calendar/';

function BlockCalendar() {
    const containerStyle = [container, mainContainer].join(" ");

    return(
        <section className={containerStyle}>

            <div className={spoilerTitle}>Экологический календарь</div>

            <Spoilers.January/>

            <Spoilers.February/>

            <Spoilers.March/>

            <Spoilers.April/>

            <Spoilers.May/>

            <Spoilers.June/>

            <Spoilers.July/>

            <Spoilers.August/>

            <Spoilers.Semptember/>

            <Spoilers.Oktober/>

            <Spoilers.November/>

            <Spoilers.December/>
            
        </section>
    );
}

export default BlockCalendar;