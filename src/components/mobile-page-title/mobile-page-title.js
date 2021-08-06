import React, {useContext} from 'react';
import {mainContainer} from '../../common-styles/containers.module.css';
import {mobilePageTitle} from '../../common-styles/title.module.css';
import MobileView from '../root-layout/view-context';

function MobilePageTitle(props) {
    const mobileView = useContext(MobileView);

    const titleStyle = [mobilePageTitle, mainContainer].join(" ");

    return(
        <>
            {
                mobileView ?
                <div className={titleStyle}>{props.title}</div>
                : null
            }
        </>
    );
}

export default MobilePageTitle;