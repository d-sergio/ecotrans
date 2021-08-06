import React from 'react';
import {calendarMonth} from '../../../common-styles/title.module.css';
import arrowPic from '../../../../static/images/spoiler/spoiler.svg';
import {bodyStyle, arrow} from './spoiler-calendar-temp.module.css';
import Spoiler from '../../../libs/react-components/spoiler';

function SpoilerCalendarTemp(props) {
    const title = <p className={calendarMonth}>{props.title}</p>;
    const open = <img className={arrow} src={arrowPic} alt="spoiler arrow"/>;
    const close = <img className={arrow} style={{transform: 'rotate(180deg'}} src={arrowPic} alt="spoiler arrow"/>;
    const body = <div className={bodyStyle}>{props.body}</div>;

    return(
        <div className={props.className}>
            <Spoiler
                title={title}
                open={open}
                close={close}
                body={body}
            />
        </div>
    );
}

export default SpoilerCalendarTemp;