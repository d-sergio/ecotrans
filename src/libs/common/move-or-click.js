/**Требуется при пролистывании слайдеров свайпами или мышью, чтобы событие
 * click не вызвало ненужный переход по ссылкам внутри слайдера.
 * 
 * Использование:
 * Назначить элементам как обработчик событий onPointerDown
*/

function moveOrClick() {
    let isMoved = false;

    try{

        window.addEventListener('pointermove', onMove, {once: true});
        window.addEventListener('pointerup', onUp, {once: true})
        window.addEventListener('pointercancel', onUp, {once: true});

    } catch(e) {
        /*Защита для build */
    }

    function onMove() {
        isMoved = true;
    }

    function onUp(e) {
        if (isMoved) {
            e.preventDefault();
            return;
        }

        isMoved = false;
    }
}

export default moveOrClick;