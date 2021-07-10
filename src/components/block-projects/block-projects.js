import React, { useContext } from 'react';
import BlockProjectsMobile from './block-projects-mobile/block-projects-mobile';
import BlockProjectsDesktop from './block-projects-desktop/block-projects-desktop';
import {textMobile, textDesktop} from './block-projects.module.css';
import MobileView from '../root-layout/view-context';

function BlockProjects() {
    const mobileView = useContext(MobileView);

    return(
        <>
            <div className={mobileView ? textMobile : textDesktop}>Наши проекты</div>
            { mobileView ? <BlockProjectsMobile/> : <BlockProjectsDesktop/> }
        </>
    );
}

export default BlockProjects;