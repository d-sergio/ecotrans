import React, { useContext } from 'react';
import Buttons from '../../buttons';
import Spoiler from '../../../libs/react-components/spoiler';
import {spoilerTitle} from '../../../common-styles/title.module.css';
import {button, margin, titleStyle} from './spoilers-projects-temp.module.css';
import MobileView from '../../root-layout/view-context';
import arrowPic from '../../../../static/images/spoiler/spoiler.svg';
import {mainContainer} from '../../../common-styles/containers.module.css';

function SpoilerProjectsTemplate(props) {
    const mobileView = useContext(MobileView);

    const titleSpoiler = <div className={spoilerTitle}>{props.title}</div>;

    const open = <img src={arrowPic} alt="spoiler arrow"/>;
    const close = <img style={{transform: 'rotate(180deg'}} src={arrowPic} alt="spoiler arrow"/>;

    const buttonStyle = [mainContainer, button].join(" ");
    const titleClass = [titleStyle, mainContainer].join(" ");

    const bodySpoiler = (
        <div>
            {props.body}
            <div className={buttonStyle}>
                {mobileView ? <Buttons.Contact.Mobile/> : <Buttons.Contact.Desktop/>}
            </div>
        </div>
    );

    return (
        <div className={margin}>
            <Spoiler
                title={titleSpoiler}
                titleClass={titleClass}
                body={bodySpoiler}
                open={open}
                close={close}
            />
        </div>
    );
}

export default SpoilerProjectsTemplate;