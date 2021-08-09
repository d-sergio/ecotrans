import React, {useState} from 'react';
import config from '../../config/config-media-queries.json';
import MobileView from './view-context';
import PageName from './page-name-context';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import {NavRoot} from '../../libs/react-components/navigate';

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
        <NavRoot>
            <PageName.Provider value={pageName}>
                <MobileView.Provider value={mobileView}>
                    {props.children}
                </MobileView.Provider>
            </PageName.Provider>
        </NavRoot>
    );
}

export default RootLayout;