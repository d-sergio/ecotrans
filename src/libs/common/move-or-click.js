/**Требуется при пролистывании слайдеров свайпами или мышью, чтобы событие
 * click не вызвало ненужный переход по ссылкам внутри слайдера.
 * 
 * Использование:
 * Назначить элементам как обработчик событий onPointerDown
*/

function moveOrClick() {
    let isMoved = false;

    try{

        window.addEventListener('pointermove', onMove);
        window.addEventListener('click', onUp)
        window.addEventListener('pointercancel', onUp);

    } catch(e) {
        /*Защита для build */
    }

    function onMove() {
        isMoved = true;
    }

    function onUp(e) {
        if (isMoved) {

            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('click', onUp)
            window.removeEventListener('pointercancel', onUp);

            e.preventDefault();
            return;
        }
    }
}

export default moveOrClick;