import {useEffect, useState} from "react";

/**Медиа-запрос
 * 
 * Описание смотри в media-query-readme.txt
 */
function useMediaQuery(queries) {
    const [mobileView, setMobileView] = useState();

    useEffect(() => initMediaQuery(), []);

    function initMediaQuery() {
        if (typeof window !== undefined) {
            const queryMobile = window.matchMedia(queries.small);
            const queryDesktop = window.matchMedia(queries.large);

            queryMobile.addEventListener("change", mobileHandler);
            queryDesktop.addEventListener("change", desktopHandler);
    
            if (mobileView === undefined) setMobileView(init);
    
            function mobileHandler(e) {
                if (e.matches) setMobileView(true);
            }
    
            function desktopHandler(e) {
                if (e.matches) setMobileView(false);
            }
    
            function init() {
                if (queryMobile.matches) return true;
                if (queryDesktop.matches) return false;
        
                return true;
            }
    
            return function removeListeners() {
                queryMobile.removeEventListener("change", mobileHandler);
                queryDesktop.removeEventListener("change", desktopHandler);
            }
        }
    }

    return mobileView;
}

export default useMediaQuery;