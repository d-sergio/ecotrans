export function onMouseOver(mymap) {
    if (mymap.current) mymap.current.dragging.enable();
}

export function onMouseLeave(mymap) {
    if (mymap.current) mymap.current.dragging.disable();
}

export function onKeyDown(e, mymap) {
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