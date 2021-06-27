import React, {useState, useEffect} from 'react';
import config from "../../config/config.json";
import ViewContext from "./view-context";

export default function RootLayout (props) {
    const [view, setView] = useState(undefined);

    useEffect(mediaQuery);

    function mediaQuery() {
        if (typeof window !== undefined) {
            const mobileView = window.matchMedia(config.mediaQuery.mobile);
            const desktopView = window.matchMedia(config.mediaQuery.desktop);

            if (view === undefined) setView(init);
    
            mobileView.addEventListener("change", mobileHandler);
            desktopView.addEventListener("change", desktopHandler);

            function mobileHandler(e) {
                if (e.matches) setView('mobile');
            }

            function desktopHandler(e) {
                if (e.matches) setView('desktop');
            }

            function init() {
                if (mobileView.matches) return 'mobile';
                if (desktopView.matches) return 'desktop';
        
                return 'mobile';
            }

            return function removeListeners() {
                mobileView.removeEventListener("change", mobileHandler);
                desktopView.removeEventListener("change", desktopHandler);
            }
        }
    }

    return (
        <ViewContext.Provider value={view}>
            {props.children}
        </ViewContext.Provider>
    );
}