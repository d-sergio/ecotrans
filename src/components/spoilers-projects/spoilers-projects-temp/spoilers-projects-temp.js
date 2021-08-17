import React from 'react';
import {spoilerTitle} from '../../../common-styles/title.module.css';
import {margin, titleStyle} from './spoilers-projects-temp.module.css';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';
import config from '../../../config/config-media-queries.json';
import arrowPic from '../../../../static/images/spoiler/spoiler.svg';
import {mainContainer} from '../../../common-styles/containers.module.css';
import SpoilerFloat from '../../../libs/react-components/spoiler-float-icon';

function SpoilerProjectsTemplate(props) {
    const deskShift = 16;
    const mobileShift = 28;

    const mobileView = useMediaQuery(config.app);

    const titleSpoiler = <div style={{display: 'inline'}}>{props.title}</div>;

    const open =
        <img
            src={arrowPic}
            alt="spoiler arrow"
        />;

    const close =
        <img
            style={{transform: 'rotate(180deg'}}
            src={arrowPic}
            alt="spoiler arrow"
        />;

    const titleClass = [spoilerTitle, mainContainer, titleStyle].join(" ");

    return (
        <div className={margin}>
            <SpoilerFloat
                iconShiftX={mobileView ? mobileShift : deskShift}
                title={titleSpoiler}
                titleClass={titleClass}
                body={props.body}
                open={open}
                close={close}
            />
        </div>
    );
}

export default SpoilerProjectsTemplate;