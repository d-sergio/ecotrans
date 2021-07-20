import React, { useEffect, useRef } from 'react';
import {onMouseOver, onMouseLeave} from './handlers';
import {checkLinks, checkScripts} from './checks';
import {loadLink, loadScript} from './load-script-style';
import initMap from './init-map';

/**Карты Leaflet
 * токен лежит в config.js
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

            script.onload = () => initMap(mounted, mymap);

        } else initMap(mounted, mymap);

        //подключить стили, если надо
        if (!linkLoaded) loadLink();

        return () => {
            mounted.current = false;
        }
    }, []);

    return(
        <div onMouseOver={() => onMouseOver(mymap)}
        onMouseLeave={() => onMouseLeave(mymap)}
        id="mapid"
        style={{height: props.height + 'px'}}></div>
    );
}

LeafletMap.defaultProps = {
    height: 257
};

export default LeafletMap;