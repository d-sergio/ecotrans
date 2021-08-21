/**Обработчик touch-событий для Slider
 * 
 * Этот обработчик должен иметь опцию {passive: false} в addEventListener.
 * Иначе не будет блокироваться вертикальный скролл страницы при прокрутке слайдера!
 *  
 * Принимаемые параметры:
 * @param {object} должен содержать следующие поля:
 *      @param {node} carousel - лента слайдов
 *      @param {node} viewport - родительский блока ленты слайдов
 *      @param {function} callback - необязательная функция, которой будет передано значение
 *      начальной скорости движения ленты слайдов
 *      @param {number} disablePageScroll - если пользователь сдвинул карусель больше, чем
 *      на указанное количество пикселей, то вертикальная прокрутка страницы блокируется
 *      @param {event} event - событие touch
 *      @param {function} autoMoveOff - колбэк для отключения автопрокрутки
*/
export default function handleTouchEvents({carousel, viewport, callback, disablePageScroll, event, autoMoveOff}) {
    //Внутренние параметры
    let startMoveX = event.touches[0].pageX;
    let currentMoveX = startMoveX;
    let startTime = Date.now();
    let shift = 0;  //К предыдущему слайду: shift > 0; К следующему слайду shift < 0
    let speed = 0;

    const shiftToLockScroll = window.innerWidth * disablePageScroll;
    //console.log(`shiftToLockScroll ${shiftToLockScroll}`);

    const startMarginLeft = parseFloat(window.getComputedStyle(carousel).marginLeft);

    /*Горизонтальная прокрутка слайдера началась, потому что модуль cumulativeShift
    превысил disablePageScroll*/
    let horizontalScrolling = false;

    /*Пользователь просто прокручивает страницу вниз. Прокрутка слайдера не нужна*/
    let verticalScrolling = false;

    const startScrollY = document.documentElement.scrollTop;
    let cumulativeScrollY = 0;

    /*Суммарный сдвиг с момента touchstart. Накапливается при каждом горизонтеальном
    движении. При достижении disablePageScroll блокируется вертикальная прокрутка
    стариницы и начинается прокрутка слайдера*/
    let cumulativeShift = 0;
    
    window.addEventListener('touchcancel', sliderTouchEndHandler);
    window.addEventListener('touchend', sliderTouchEndHandler);
    window.addEventListener('touchmove', sliderTouchMoveHandler, {passive: false});

    //Двигаем ленту слайдов
    function sliderTouchMoveHandler(moveEvent){
        //console.log(`verticalScrolling ${verticalScrolling}`)
        //console.log(`cumulativeScrollY ${cumulativeScrollY}`)
        try{
            if (verticalScrolling) return;

            //Начинаем прокрутку слайдера
            if (!horizontalScrolling && Math.abs(cumulativeShift) >= shiftToLockScroll) {

                /*Отключить автопрокрутку */
                if (autoMoveOff) autoMoveOff();

                /*Режим прокрутки слайдера. Вертикальная прокрутка страницы
                будет запрещена */
                horizontalScrolling = true;
                //console.log('горизонтальная прокрутка')
            }

            if (horizontalScrolling) preventDefaultEvent(moveEvent);

            currentMoveX = moveEvent.touches.item(0).pageX;
            shift = currentMoveX - startMoveX;
            cumulativeShift += shift;

            //console.log(`shiftX: ${cumulativeShift}`)
            
            const targetMarginLeft = startMarginLeft + cumulativeShift;

            const carouselWidth = carousel.offsetWidth;
            const maxCarouselPosition = -carouselWidth + viewport.offsetWidth;

            if (targetMarginLeft <= 0
                && targetMarginLeft >= maxCarouselPosition
                && horizontalScrolling) {

                    requestAnimationFrame(function move(){
                    //допустимые границы движения ленты слайдов и cumulativeShift
                        carousel.style.marginLeft = targetMarginLeft + 'px';
                    });
            }

            let movementTime = Date.now() - startTime;

            if (movementTime < 1) movementTime = 1;

            speed = shift / movementTime;

            startMoveX = currentMoveX;  //Последняя точка текущего движения становится стартовой для нового движения
            startTime = Date.now(); //Время последней точки становится стратовым временем следующей точки

            function preventDefaultEvent(e) {
                if (e.cancelable) {

                    e.preventDefault();

                } else {

                    sliderTouchEndHandler();
                }
            }

            const currentScrollY = document.documentElement.scrollTop;

            if (!horizontalScrolling) {
                /**Пользователь прокручивает страницу, а не слайдер?
                 * Да - отмена всех дальнейших действий
                */
                const deltaSrollY = currentScrollY - startScrollY;
                cumulativeScrollY += deltaSrollY;

                //console.log(`cumulativeScrollY: ${cumulativeScrollY}`)
            }
    
            /*Режим вертикальной прокрутки страницы. Прокрутка слайдера будет
            запрещена */
            //if (currentScrollY !== startScrollY && !horizontalScrolling) {
            if (!horizontalScrolling && Math.abs(cumulativeScrollY) > shiftToLockScroll) {

                verticalScrolling = true;
                //console.log('вертикальная прокрутка')
                //return;

            } else if (currentScrollY !== startScrollY && horizontalScrolling) {
                /*Такое вряд ли случится, но на всякий случай отменим вертикальную
                прокрутку*/
                preventDefaultEvent(moveEvent);
                //return;
            }

        } catch(e) {
            console.log('Slider Ошибка sliderTouchMoveHandler(): ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    //Завершаем работу. Передаём слайдеру скорость, которая была в последний момент
    function sliderTouchEndHandler() {
        //console.log('end')
        window.removeEventListener('touchcancel', sliderTouchEndHandler);
        window.removeEventListener('touchend', sliderTouchEndHandler);
        window.removeEventListener('touchmove', sliderTouchMoveHandler, {passive: false});

        /*Если это был не вертикальный скролл страницы */
        if (callback !== undefined && callback !== null && !verticalScrolling) {
            callback(speed);
        }
    }
}