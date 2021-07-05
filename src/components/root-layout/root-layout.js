import React, {useState, useEffect} from 'react';
import config from '../../config/config-media-queries.json';
import MobileView from './view-context';
import mediaQuery from '../../libs/react/media-query';

const queries = {
    mobile: config.app.mobile,
    desktop: config.app.desktop
};

export default function RootLayout (props) {
    const [mobileView, setMobileView] = useState(undefined);

    useEffect(() => mediaQuery(mobileView, setMobileView, queries), [mobileView]);

    return (
        <MobileView.Provider value={mobileView}>
            {props.children}
        </MobileView.Provider>
    );
}