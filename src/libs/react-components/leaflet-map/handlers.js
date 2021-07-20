export function onMouseOver(mymap) {
    document.addEventListener(
        'keydown',
        (e) => onKeyDown(e, mymap),
        {once: true}
    );

    if (mymap.current) mymap.current.dragging.enable();
}

export function onMouseLeave(mymap) {

    if (mymap.current) mymap.current.dragging.disable();
}

function onKeyDown(e, mymap) {
    if (e.key === "Shift") {
        e.preventDefault();

        if (mymap.current) {
            mymap.current.scrollWheelZoom.enable();
            
            document.addEventListener(
                'keyup',
                () => onKeyUp(mymap),
                {once: true}
            );
        }
    }
}

function onKeyUp(mymap) {
    if (mymap.current) mymap.current.scrollWheelZoom.disable();
}