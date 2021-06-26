import React, {useState, useEffect} from 'react';
import config from "../../config/config.json";
import ViewContext from "./view-context";

export default function RootLayout (props) {
    const [view, setView] = useState(undefined);

    useEffect(() => {
        if (view === undefined) {
            setView(init);
        } else mediaQuery();
    });

    function mediaQuery() {
        if (typeof window !== undefined) {
            const mobileView = window.matchMedia(config.mediaQuery.mobile);
            const desktopView = window.matchMedia(config.mediaQuery.desktop);
    
            mobileView.addEventListener("change", mobileHandler);
            desktopView.addEventListener("change", desktopHandler);

            function mobileHandler(e) {
                changeView(e, 'mobile');
            }

            function desktopHandler(e) {
                changeView(e, 'desktop');
            }

            function changeView(e, view) {
                if (e.matches) setView(view);
            }

            return function removeListeners() {
                mobileView.removeEventListener("change", mobileHandler);
                desktopView.removeEventListener("change", desktopHandler);
            }
        }
    }

    function init() {
        if (typeof window !== undefined) {
            const mobileView = window.matchMedia(config.mediaQuery.mobile);
            const desktopView = window.matchMedia(config.mediaQuery.desktop);

            if (mobileView.matches) return 'mobile';
            if (desktopView.matches) return 'desktop';
        }

        return 'mobile';
    }

    return (
        <ViewContext.Provider value={view}>
            {props.children}
        </ViewContext.Provider>
    );
}