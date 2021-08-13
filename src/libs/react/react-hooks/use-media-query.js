import {useEffect, useState} from "react";

/**Медиа-запрос
 * 
 * Описание смотри в readme.txt
 */
function useMediaQuery(q) {
    const [match, setMatch] = useState();

    useEffect(() => initMediaQuery(), []);

    function initMediaQuery() {
        if (typeof window !== undefined) {

            const query = window.matchMedia(q);

            query.addEventListener("change", checkMatches);
    
            if (match === undefined) setMatch(init);

            function init() {
        
                return query.matches ? true : false;
            }

            function checkMatches(e) {

                setMatch(e.matches ? true : false);
            }
    
            return () => query.removeEventListener("change", checkMatches);
        }
    }

    return match;
}

export default useMediaQuery;