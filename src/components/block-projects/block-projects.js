import React, { useContext } from 'react';
import BlockProjectsMobile from './block-projects-mobile/block-projects-mobile';
import BlockProjectsDesktop from './block-projects-desktop/block-projects-desktop';
import {desktopContainer, mobileContainerWhite} from '../../common-styles/containers.module.css';
import {titleMobile, titleDesktop} from '../../common-styles/title.module.css';
import {textMobile} from './block-projects.module.css';
import MobileView from '../root-layout/view-context';

function BlockProjects() {
    const mobileView = useContext(MobileView);

    const mobileStyle = [mobileContainerWhite, titleMobile, textMobile].join(" ");
    const desktopStyle = [desktopContainer, titleDesktop].join(" ");

    return(
        <>
            <div className={mobileView ? mobileStyle : desktopStyle}>Наши проекты</div>
            { mobileView ? <BlockProjectsMobile/> : <BlockProjectsDesktop/> }
        </>
    );
}

export default BlockProjects;