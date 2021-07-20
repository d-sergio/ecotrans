/**загрузить скрипт */
export function loadScript() {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
    script.integrity = "sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==";
    script.crossOrigin = "";
    document.head.prepend(script);

    return script;
}

/**загрузить стили */
export function loadLink() {
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
    link.integrity = "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==";
    link.crossOrigin = "";
    document.head.prepend(link);
}