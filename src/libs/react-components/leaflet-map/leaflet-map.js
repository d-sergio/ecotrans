import React, { useEffect, useRef } from 'react';
import {onMouseOver, onMouseLeave} from './handlers';
import {checkLinks, checkScripts} from './checks';
import {loadLink, loadScript} from './load-script-style';
import initMap from './init-map';

/**Карты Leaflet
 * Токен лежит в config.js
 * Все настройки карты в initMap.
 * 
 * Props:
 * 
 * height - высота должна быть задана явно
 * view - координаты, где будет установлен центр карты, в виде
 * массива [широта, долгота]
 * zoom - зум
 * marker - координаты маркера
 * popup - текст над маркером передаётся как node в строке.
 * Например: popup={"<div>Hello, world!</>"}
 * 
 * Зум колесом мыши и перетаскивание карты заблокированы в initMap.
 * 
 * На сенсорных устройствах зум и перетаскивание двумя пальцами.
 * 
 * На остальных - удерживая Shift (обработчики onMouseOver, onMouseLeave)
*/
function LeafletMap(props) {
    const mounted = useRef();   //false, если размонтирован
    const mymap = useRef();

    useEffect(() => {
        mounted.current = true;

        //скрипт загружен? стили загружены?
        const scriptLoaded = checkScripts();
        const linkLoaded = checkLinks();

        //инициализировать карту сразу или после загрузки скрипта
        if (!scriptLoaded) {
            const script = loadScript();

            script.onload = () => initMap(mounted, mymap, props.view, props.zoom, props.marker, props.popup);

        } else initMap(mounted, mymap, props.view, props.zoom, props.marker, props.popup);

        //подключить стили, если надо
        if (!linkLoaded) loadLink();

        return () => {
            mounted.current = false;
        }
    }, []);

    return(
        <div onMouseOver={() => onMouseOver(mymap)}
        onMouseLeave={() => onMouseLeave(mymap)}
        onTouchEnd={() => onMouseLeave(mymap)}
        onPointerCancel={() => onMouseLeave(mymap)}
        id="mapid"
        style={{height: props.height + 'px'}}></div>
    );
}

LeafletMap.defaultProps = {
    height: 257,
    zoom: 15,
    view: [51.66849, 36.13614],
    marker: [51.662725, 36.134059],
    popup: "<div>popup</div>"
};

export default LeafletMap;