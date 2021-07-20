export function onMouseOver(mymap) {
    document.addEventListener(
        'keydown',
        (e) => onKeyDown(e, mymap),
        {once: true}
    );

    if (mymap.current) mymap.current.dragging.enable();
}

export function onMouseLeave(mymap) {

    mymap.current.dragging.disable();
}

function onKeyDown(e, mymap) {
    if (e.key === "Shift") {
        e.preventDefault();

        mymap.current.scrollWheelZoom.enable();
        document.addEventListener(
            'keyup',
            () => onKeyUp(mymap),
            {once: true}
        );
    }
}

function onKeyUp(mymap) {
    mymap.current.scrollWheelZoom.disable();
}