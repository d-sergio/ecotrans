import React, { useEffect } from 'react';
import BlockProjectsMobile from './block-projects-mobile/block-projects-mobile';
import BlockProjectsDesktop from './block-projects-desktop/block-projects-desktop';
import {mainContainer} from '../../common-styles/containers.module.css';
import {title} from '../../common-styles/title.module.css';
import {textMobile} from './block-projects.module.css';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';

/**BlockProjects - Наши проекты */
function BlockProjects() {

    const mobileView = useMediaQuery(config.blockProjects);

    const mobileStyle = [mainContainer, title, textMobile].join(" ");
    const desktopStyle = [mainContainer, title].join(" ");

    if (mobileView === undefined) return null;

    return(
        <>
            <div className={mobileView ? mobileStyle : desktopStyle}>Наши проекты</div>
            { mobileView ? <BlockProjectsMobile/> : <BlockProjectsDesktop/> }
        </>
    );
}

export default BlockProjects;