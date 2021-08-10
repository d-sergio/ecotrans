import React, {useState} from 'react';
import config from '../../config/config-media-queries.json';
import MobileView from './view-context';
import PageName from './page-name-context';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import {AnchorRoot} from '../../libs/react-components/anchors';

function RootLayout (props) {
    const queries = {
        small: config.app.small,
        large: config.app.large
    };

    const mobileView = useMediaQuery(queries);

    const [pageName, setPageName] = useState({
        name: '/',
        change: changeName
    });

    function changeName(currentPage) {
        setPageName({
            ...pageName,
            name: currentPage
        });
    }

    return (
        <AnchorRoot>
            <PageName.Provider value={pageName}>
                <MobileView.Provider value={mobileView}>
                    {props.children}
                </MobileView.Provider>
            </PageName.Provider>
        </AnchorRoot>
    );
}

export default RootLayout;