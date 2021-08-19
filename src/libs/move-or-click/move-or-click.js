function moveOrClick() {
    let isMoved = false;

    try{

        window.addEventListener('mousemove', onMove, {once: true});
        window.addEventListener('click', onUp, {once: true})

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

export default moveOrClick;