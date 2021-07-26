import token from './token.json';

function initMap(mounted, mymap, view, zoom, marker, popup) {
    if (!mounted.current) return;   //ничего не делать, если размонтирован

    mymap.current = window.L.map('mapid').setView(view, zoom);

    window.L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token.accessToken}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap.current);

    window.L.marker(marker)
    .addTo(mymap.current).bindPopup(popup);

    /*Блокируется зум колесом мыши и перетаскивание карты.
    Однако её можно перетаксивать двумя пальцами на сенсорных устройствах*/
    mymap.current.scrollWheelZoom.disable();
    mymap.current.dragging.disable();
    //mymap.current.keyboard.disable();

    //Скрыть кнопки управления масштабом
    mymap.current.removeControl(mymap.current.zoomControl);

    //Поместить кнопки управления масштабом в правом нижнем углу
    window.L.control.zoom({position: 'bottomright'}).addTo(mymap.current);
}

export default initMap;