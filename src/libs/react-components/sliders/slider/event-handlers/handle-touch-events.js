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
 *      @param {number} disableScrollingOn - если пользователь сдвинул карусель больше, чем
 *      на указанное количество пикселей, то вертикальная прокрутка страницы блокируется
 *      @param {event} event - событие touch
 *      @param {function} autoMoveOff - колбэк для отключения автопрокрутки
*/
export default function handleTouchEvents({carousel, viewport, callback, disableScrollingOn, event, autoMoveOff}) {
    //Внутренние параметры
    let startMoveX = event.touches[0].pageX;
    let currentMoveX = startMoveX;
    let startTime = Date.now();
    let shift = 0;  //К предыдущему слайду: shift > 0; К следующему слайду shift < 0
    let speed = 0;

    const startMarginLeft = parseFloat(window.getComputedStyle(carousel).marginLeft);

    /*Горизонтальная прокрутка слайдера началась, потому что модуль cumulativeShift
    превысил disableScrollingOn*/
    let horizontalScrolling = false;

    /*Пользователь просто прокручивает страницу вниз. Прокрутка слайдера не нужна*/
    let verticalScrolling = false;

    const startScrollY = document.documentElement.scrollTop;
    let cumulativeScrollY = 0;

    /*Суммарный сдвиг с момента touchstart. Накапливается при каждом горизонтеальном
    движении. При достижении disableScrollingOn блокируется вертикальная прокрутка
    стариницы и начинается прокрутка слайдера*/
    let cumulativeShift = 0;
    
    window.addEventListener('touchcancel', sliderTouchEndHandler);
    window.addEventListener('touchend', sliderTouchEndHandler);
    window.addEventListener('touchmove', sliderTouchMoveHandler, {passive: false});

    //Двигаем ленту слайдов
    function sliderTouchMoveHandler(moveEvent){
        try{
            if (verticalScrolling) return;

            /**Пользователь прокручивает страницу, а не слайдер?
             * Да - отмена всех дальнейших действий
            */
            const currentScrollY = document.documentElement.scrollTop;
            const deltaSrollY = Math.abs(currentScrollY - startScrollY);
            cumulativeScrollY += deltaSrollY;
    
            //if (currentScrollY !== startScrollY && !horizontalScrolling) {
            if (cumulativeScrollY >= 5 && !horizontalScrolling) {

                verticalScrolling = true;
                    
                return;

            } else if (currentScrollY !== startScrollY && horizontalScrolling) {
                /*Такое вряд ли случится, но на всякий случай отменим вертикальную
                прокрутку*/
                preventDefaultEvent(moveEvent);
            }

            //Начинаем прокрутку слайдера
            if (Math.abs(!horizontalScrolling && cumulativeShift) >= disableScrollingOn) {

                /*Отключить автопрокрутку */
                if (autoMoveOff) autoMoveOff();

                horizontalScrolling = true;
            }

            if (horizontalScrolling) preventDefaultEvent(moveEvent);

            currentMoveX = moveEvent.changedTouches[0].pageX;
            shift = currentMoveX - startMoveX;
            cumulativeShift += shift;
            
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
        } catch(e) {
            console.log('Slider Ошибка sliderTouchMoveHandler(): ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    //Завершаем работу. Передаём слайдеру скорость, которая была в последний момент
    function sliderTouchEndHandler() {

        window.removeEventListener('touchcancel', sliderTouchEndHandler);
        window.removeEventListener('touchend', sliderTouchEndHandler);
        window.removeEventListener('touchmove', sliderTouchMoveHandler, {passive: false});

        /*Если это был не вертикальный скролл страницы */
        if (callback !== undefined && callback !== null && !verticalScrolling) {
            callback(speed);
        }
    }
}