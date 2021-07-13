import React, { useContext } from 'react';
import Buttons from '../../buttons';
import Spoiler from '../../../libs/react-components/spoiler';
import {title} from '../../../common-styles/title.module.css';
import {green, button} from './services-spoilers-temp.module.css';
import MobileView from '../../root-layout/view-context';
import arrowPic from '../../../../static/images/spoiler/spoiler.svg';

function ServicesSpoilerTemplate(props) {
    const mobileView = useContext(MobileView);

    const titleSpoiler = <div className={title}>{props.title}</div>;

    const open = <img src={arrowPic} alt="spoiler arrow"/>;
    const close = <img style={{transform: 'rotate(180deg'}} src={arrowPic} alt="spoiler arrow"/>;

    const bodySpoiler = (
        <div>
            {props.image}
            {props.paragraphs[0]}
            <div className={green}>
                {props.green}
            </div>
            {props.paragraphs.slice(1)}
            <div className={button}>
                {mobileView ? <Buttons.Order.Mobile/> : <Buttons.Order.Desktop/>}
            </div>
        </div>
    );

    return <Spoiler title={titleSpoiler} body={bodySpoiler} open={open} close={close}/>;
}

export default ServicesSpoilerTemplate;