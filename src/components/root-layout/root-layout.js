import React, {useState, useEffect} from 'react';
import config from "../../config/config.json";
import MobileView from "./view-context";
import mediaQuery from './media-query';

const queries = {
    mobile: config.appQuery.mobile,
    desktop: config.appQuery.desktop
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