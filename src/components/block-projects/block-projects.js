import React, { useState, useEffect } from 'react';
import BlockProjectsMobile from './block-projects-mobile/block-projects-mobile';
import BlockProjectsDesktop from './block-projects-desktop/block-projects-desktop';
import {mainContainer} from '../../common-styles/containers.module.css';
import {title} from '../../common-styles/title.module.css';
import {textMobile} from './block-projects.module.css';
import mediaQuery from '../../libs/react/media-query';
import config from '../../config/config-media-queries.json';

/**BlockProjects - Наши проекты */
function BlockProjects() {
    const queries = {
        small: config.blockProjects.small,
        large: config.blockProjects.large
    };

    const [mobileView, setMobileView] = useState(undefined);

    useEffect(() => mediaQuery(mobileView, setMobileView, queries), []);

    if (mobileView === undefined) return null;

    const mobileStyle = [mainContainer, title, textMobile].join(" ");
    const desktopStyle = [mainContainer, title].join(" ");

    return(
        <>
            <div className={mobileView ? mobileStyle : desktopStyle}>Наши проекты</div>
            { mobileView ? <BlockProjectsMobile/> : <BlockProjectsDesktop/> }
        </>
    );
}

export default BlockProjects;