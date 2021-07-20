/**скрипт загружен?*/ 
export function checkScripts() {
    const scripts = document.head.getElementsByTagName('script');

    for (let item of scripts) {
        if (item.src === "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js") {
            return true;
        }
    }

    return false;
}

/**стили загружены?*/
export function checkLinks() {
    const links = document.head.getElementsByTagName('link');

    for (let item of links) {
        if (item.href === "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css") {
            return true;
        }
    }

    return false;
}