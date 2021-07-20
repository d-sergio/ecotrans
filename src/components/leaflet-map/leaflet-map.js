import React, { useEffect, useRef } from 'react';
import config from './config.json';

/**Карты Leaflet
 * токен лежит в config.js
*/
function LeafletMap(props) {
    const mounted = useRef();   //false, если размонтирован
    const mymap = useRef();

    useEffect(() => {
        mounted.current = true;

        const scriptLoaded = checkScripts();
        const linkLoaded = checkLinks();

        if (!scriptLoaded) {    //скрипт не загружен
            const script = createScript();

            script.onload = () => initMap(mounted, mymap);

        } else initMap(mounted, mymap);

        if (!linkLoaded) createLink();  //стили не загружены

        return () => {
            mounted.current = false;
        }
    }, []);

    return(
        <div id="mapid" style={{height: props.height + 'px'}}></div>
    );
}

LeafletMap.defaultProps = {
    height: 257
};

export default LeafletMap;

function checkScripts() {
    const scripts = document.head.getElementsByTagName('script');

    for (let item of scripts) {
        if (item.src === "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js") {
            return true;
        }
    }

    return false;
}

function checkLinks() {
    const links = document.head.getElementsByTagName('link');

    for (let item of links) {
        if (item.href === "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css") {
            return true;
        }
    }

    return false;
}

function createScript() {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
    script.integrity = "sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==";
    script.crossOrigin = "";
    document.head.prepend(script);

    return script;
}

function createLink() {
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
    link.integrity = "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==";
    link.crossOrigin = "";
    document.head.prepend(link);
}

function initMap(mounted, mymap) {
    if (!mounted.current) return;   //ничего не делать, если размонтирован

    mymap.current = window.L.map('mapid').setView([51.662725, 36.134059], 18);

    window.L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.accessToken}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: config.accessToken
    }).addTo(mymap.current);

    window.L.marker([51.662725, 36.134059])
    .addTo(mymap.current).bindPopup("<b>этаж 2, комната 17</b>");

    mymap.current.scrollWheelZoom.disable();
    mymap.current.dragging.disable();
}