import React, { useContext } from 'react';
import Buttons from '../../buttons';
import Spoiler from '../../../libs/react-components/spoiler';
import {title} from '../../../common-styles/title.module.css';
import {button} from './spoilers-projects-temp.module.css';
import MobileView from '../../root-layout/view-context';
import arrowPic from '../../../../static/images/spoiler/spoiler.svg';

function SpoilerProjectsTemplate(props) {
    const mobileView = useContext(MobileView);

    const titleSpoiler = <div className={title}>{props.title}</div>;

    const open = <img src={arrowPic} alt="spoiler arrow"/>;
    const close = <img style={{transform: 'rotate(180deg'}} src={arrowPic} alt="spoiler arrow"/>;

    const bodySpoiler = (
        <div>
            {props.body}
            <div className={button}>
                {mobileView ? <Buttons.Contact.Mobile/> : <Buttons.Contact.Desktop/>}
            </div>
        </div>
    );

    return <Spoiler title={titleSpoiler} body={bodySpoiler} open={open} close={close}/>;
}

export default SpoilerProjectsTemplate;