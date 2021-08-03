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

    let verticalScrolling = false;

    const startScrollY = document.documentElement.scrollTop;

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
            //console.log(`#1 verticalScrolling ${verticalScrolling}`);
            if (verticalScrolling) return;

            const currentScrollY = document.documentElement.scrollTop;
    
            //console.log(`#2 currentScrollY ${currentScrollY}, startScrollY ${startScrollY}, scrollingStarted ${scrollingStarted}`);
            if (currentScrollY !== startScrollY && !scrollingStarted) {
                verticalScrolling = true;
                
                console.log(`#3 currentScrollY ${currentScrollY}, startScrollY ${startScrollY}, verticalScrolling ${verticalScrolling}`);
    
                return;
            } else if (currentScrollY !== startScrollY && scrollingStarted) {
                //console.log('!!!!!!!!!!!!!');
                sliderTouchEndHandler();
            }

            //console.log(`#4 scrollingStarted ${scrollingStarted}, verticalScrolling ${verticalScrolling}`);
            if (scrollingStarted) moveEvent.preventDefault();

            //console.log(`#5 scrollingStarted ${scrollingStarted}`);
            if (Math.abs(!scrollingStarted && cumulativeShift) >= disableScrollingOn) scrollingStarted = true;
            //console.log(`#6 scrollingStarted ${scrollingStarted}`);

            currentMoveX = moveEvent.changedTouches[0].pageX;
            shift = currentMoveX - startMoveX;
            cumulativeShift += shift;
            
            const targetMarginLeft = startMarginLeft + cumulativeShift;

            const carouselWidth = carousel.offsetWidth;
            const maxCarouselPosition = -carouselWidth + viewport.offsetWidth;

            if (targetMarginLeft <= 0
                && targetMarginLeft >= maxCarouselPosition
                && scrollingStarted) {
                    //console.log(`sliderTouchMoveHandler: scrollingStarted ${scrollingStarted}, verticalScrolling ${verticalScrolling}`);

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

        } catch(e) {
            console.log('Slider Ошибка sliderTouchMoveHandler(): ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    //Завершаем работу. Передаём слайдеру скорость, которая была в последний момент
    function sliderTouchEndHandler() {

        window.removeEventListener('touchcancel', sliderTouchEndHandler);
        window.removeEventListener('touchend', sliderTouchEndHandler);
        window.removeEventListener('touchmove', sliderTouchMoveHandler, {passive: false});

        if (callback !== undefined && callback !== null) {
            callback(speed);
        }
    }
}