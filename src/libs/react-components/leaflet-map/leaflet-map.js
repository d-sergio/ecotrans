import React, { useEffect, useRef } from 'react';
import {onMouseOver, onMouseLeave, onKeyDown} from './handlers';
import {checkLinks, checkScripts} from './checks';
import {loadLink, loadScript} from './load-script-style';
import initMap from './init-map';

/**Карты Leaflet
 * Токен лежит в config.js
 * Все настройки карты в initMap.
 * 
 * Props:
 * 
 * @param {number} height - высота должна быть задана явно
 * @param {[number, number]} view - координаты, где будет установлен центр карты, в виде
 * массива [широта, долгота]
 * @param {number} zoom - зум
 * @param {[number, number]} marker - координаты маркера [широта, долгота]
 * @param {string} popup - текст над маркером передаётся как node в строке.
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

            script.onload = () => {
                initMap(mounted, mymap, props.view, props.zoom, props.marker, props.popup);
                //document.addEventListener('keydown', waitShift);
            }

        } else {
            initMap(mounted, mymap, props.view, props.zoom, props.marker, props.popup);
            //document.addEventListener('keydown', waitShift);
        }

        //подключить стили, если надо
        if (!linkLoaded) loadLink();

        return () => {
            mounted.current = false;
            //document.removeEventListener('keydown', waitShift);
        }
    }, []);

    /**Ждём нажатия Shift, чтобы разрешить зум колесом мыши*/
    /*function waitShift(e) {
        onKeyDown(e, mymap);
    }*/

    return(
        <div
            id="mapid"
            style={{height: props.height + 'px'}}
        >
        </div>
    );
}

/*
    return(
        <div
            onMouseOver={() => onMouseOver(mymap)}
            onMouseLeave={() => onMouseLeave(mymap)}
            onTouchEnd={() => onMouseLeave(mymap)}
            onPointerCancel={() => onMouseLeave(mymap)}
            id="mapid"
            style={{height: props.height + 'px'}}
        >
        </div>
    );
*/

LeafletMap.defaultProps = {
    height: 257,
    zoom: 15,
    view: [51.66849, 36.13614],
    marker: [51.662725, 36.134059],
};

export default LeafletMap;