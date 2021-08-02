/**Обработчик touch-событий для Slider
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
*/
export default function handleTouchEvents({carousel, viewport, callback, disableScrollingOn, event}) {

    //Внутренние параметры
    let startMoveX = event.touches[0].pageX;
    let currentMoveX = startMoveX;
    let startTime = Date.now();
    let shift = 0;  //К предыдущему слайду: shift > 0; К следующему слайду shift < 0
    let speed = 0;

    const startMarginLeft = parseFloat(window.getComputedStyle(carousel).marginLeft);

    /*Прокрутка слайдера началась, потому что модуль cumulativeShift
    превысил disableScrollingOn*/
    let scrollingStarted = false;

    /*Суммарный сдвиг с момента touchstart. Накапливается при каждом горизонтеальном
    движении. При достижении disableScrollingOn блокируется вертикальная прокрутка
    стариницы и начинается прокрутка слайдера*/
    let cumulativeShift = 0;

    const bodyOverflow = window.getComputedStyle(document.body).overflow;
    const bodyHeight = window.getComputedStyle(document.body).height;
    
    //event.preventDefault();
    window.addEventListener('touchcancel', sliderTouchEndHandler);
    window.addEventListener('touchend', sliderTouchEndHandler);
    window.addEventListener('touchmove', sliderTouchMoveHandler);

    //Двигаем ленту слайдов
    function sliderTouchMoveHandler(event){
        try{
            currentMoveX = event.changedTouches[0].pageX;
            shift = currentMoveX - startMoveX;
            cumulativeShift += shift;
            
            if (Math.abs(cumulativeShift) >= disableScrollingOn) scrollingStarted = true;

            if (disableScrollingOn !== undefined
                && disableScrollingOn !== null
                && disableScrollingOn !== false
                && Math.abs(cumulativeShift) >= disableScrollingOn) {

                    blockVerticalScrolling();
            }

            const targetMarginLeft = startMarginLeft + cumulativeShift;

            const carouselWidth = carousel.offsetWidth;
            const maxCarouselPosition = -carouselWidth + viewport.offsetWidth;

            requestAnimationFrame(function move(){
                //допустимые границы движения ленты слайдов и cumulativeShift
                if (targetMarginLeft <= 0
                    && targetMarginLeft >= maxCarouselPosition
                    && scrollingStarted) {
                    carousel.style.marginLeft = targetMarginLeft + 'px';
                }
            });

            let movementTime = Date.now() - startTime;

            if (movementTime < 1) movementTime = 1;

            speed = shift / movementTime;

            startMoveX = currentMoveX;  //Последняя точка текущего движения становится стартовой для нового движения
            startTime = Date.now(); //Время последней точки становится стратовым временем следующей точки

        } catch(e) {
            console.log('Slider Ошибка sliderTouchMoveHandler(): ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    //Завершаем работу. Передаём слайдеру скорость, которая была в последний момент
    function sliderTouchEndHandler() {
        unlockVerticalScrolling();

        window.removeEventListener('touchcancel', sliderTouchEndHandler);
        window.removeEventListener('touchend', sliderTouchEndHandler);
        window.removeEventListener('touchmove', sliderTouchMoveHandler);

        if (callback !== undefined && callback !== null) {
            callback(speed);
        }
    }


    function blockVerticalScrolling() {
        document.body.style.overflow = 'hidden';
        
        document.body.style.height = bodyHeight;
    }

    function unlockVerticalScrolling() {
        document.body.style.overflow = bodyOverflow;

        document.body.style.height = '';
    }
}