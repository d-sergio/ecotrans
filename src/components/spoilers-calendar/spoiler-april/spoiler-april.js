import React from 'react';
import Spoiler from '../../../libs/react-components/spoiler';
import {calendarMonth} from '../../../common-styles/title.module.css';
import {container, bodyStyle} from './spoiler-april.module.css';
import arrowPic from '../../../../static/images/spoiler/spoiler.svg';
import Cards from '../../cards-calendar';

function SpoilerApril() {
    const titleText = <p className={calendarMonth}>Апрель</p>
    const open = <img src={arrowPic} alt="spoiler arrow"/>;
    const close = <img style={{transform: 'rotate(180deg'}} src={arrowPic} alt="spoiler arrow"/>;

    const body =
        <div className={bodyStyle}>
            <Cards.April1/>
            <Cards.April5/>
            <Cards.April7/>
            <Cards.April15/>
            <Cards.April18_22/>
            <Cards.April19/>
        </div>
    ;


    return(
        <div className={container}>
            <Spoiler
                title={titleText}
                body={body}
                open={open}
                close={close}
            />
        </div>
    );
}

export default SpoilerApril;