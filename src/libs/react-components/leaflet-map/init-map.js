import config from './config.json';

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

    /*Блокируется зум колесом мыши и перетаскивание карты.
    Однако её можно перетаксивать двумя пальцами на сенсорных устройствах*/
    mymap.current.scrollWheelZoom.disable();
    mymap.current.dragging.disable();
}

export default initMap;