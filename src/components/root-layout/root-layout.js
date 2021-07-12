import React, {useState, useEffect} from 'react';
import config from '../../config/config-media-queries.json';
import MobileView from './view-context';
import PageName from './page-name-context';
import mediaQuery from '../../libs/react/media-query';

export default function RootLayout (props) {
    const queries = {
        small: config.app.small,
        large: config.app.large
    };
    
    const [mobileView, setMobileView] = useState(undefined);

    useEffect(() => mediaQuery(mobileView, setMobileView, queries), []);

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
        <PageName.Provider value={pageName}>
            <MobileView.Provider value={mobileView}>
                {props.children}
            </MobileView.Provider>
        </PageName.Provider>
    );
}