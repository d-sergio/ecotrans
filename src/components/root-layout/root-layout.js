import React from 'react';
import config from '../../config/config-media-queries.json';
import MobileView from './view-context';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import {AnchorRoot} from '../../libs/react-components/anchors';

function RootLayout (props) {

    const mobileView = useMediaQuery(config.app);

    return (
        <AnchorRoot>
            <MobileView.Provider value={mobileView}>
                {props.children}
            </MobileView.Provider>
        </AnchorRoot>
    );
}

export default RootLayout;