import React from 'react';
import {mainContainer} from '../../common-styles/containers.module.css';
import {spoilerTitle} from '../../common-styles/title.module.css';
import {container} from './block-calendar.module.css';
import SpoilerApril from '../spoilers-calendar/spoiler-april';

function BlockCalendar() {
    const containerStyle = [container, mainContainer].join(" ");

    return(
        <section className={containerStyle}>

            <div className={spoilerTitle}>Экологический календарь</div>

            <SpoilerApril/>
            
        </section>
    );
}

export default BlockCalendar;