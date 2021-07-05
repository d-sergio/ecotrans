/**Медиа-запрос
 * 
 * Описание смотри в media-query-readme.txt
 */
function mediaQuery(mobileView, setMobileView, queries) {
    if (typeof window !== undefined) {
        const queryMobile = window.matchMedia(queries.mobile);
        const queryDesktop = window.matchMedia(queries.desktop);

        if (mobileView === undefined) setMobileView(init);

        queryMobile.addEventListener("change", mobileHandler);
        queryDesktop.addEventListener("change", desktopHandler);

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

export default mediaQuery;