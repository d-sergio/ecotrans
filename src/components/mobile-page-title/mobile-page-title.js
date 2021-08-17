import React from 'react';
import {mainContainer} from '../../common-styles/containers.module.css';
import {mobilePageTitle} from '../../common-styles/title.module.css';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';

function MobilePageTitle(props) {
    const mobileView = useMediaQuery(config.app);

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