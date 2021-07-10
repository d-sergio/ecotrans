import React, {useState, useEffect} from 'react';
import config from '../../config/config-media-queries.json';
import MobileView from './view-context';
import mediaQuery from '../../libs/react/media-query';

export default function RootLayout (props) {
    const queries = {
        small: config.app.small,
        large: config.app.large
    };
    
    const [mobileView, setMobileView] = useState(undefined);

    useEffect(() => mediaQuery(mobileView, setMobileView, queries), []);

    return (
        <MobileView.Provider value={mobileView}>
            {props.children}
        </MobileView.Provider>
    );
}