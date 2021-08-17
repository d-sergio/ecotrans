/**Возвращает результат медиа-запроса: true/false */
function mediaQuery(query) {
    try{
        
        const mediaQuery = window.matchMedia(query);

        return mediaQuery.matches;

    } catch(e) {
        /*Защита для build */
    }
}

export default mediaQuery;