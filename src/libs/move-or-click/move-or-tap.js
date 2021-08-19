function moveOrTap() {
    let isMoved = false;

    try{

        window.addEventListener('touchmove', onMove, {once: true});
        window.addEventListener('touchend', onUp, {once: true});

    } catch(e) {
        /*Защита для build */
    }

    function onMove() {
        isMoved = true;
    }

    function onUp(e) {
        if (isMoved) {
            e.preventDefault();
            isMoved = false;

            return;
        }

        isMoved = false;
    }
}

export default moveOrTap;