/**
 * @2 Суммарный сдвиг с момента touchstart. Накапливается при каждом горизонтеальном
 * движении. При достижении lockScroll блокируется вертикальная прокрутка
 * стариницы и начинается прокрутка слайдера
 * 
 * @3 Горизонтальная прокрутка слайдера начнётся, когда модуль cumulativeShiftX
 * превысит lockScroll
 * 
 * @4 Пользователь просто прокручивает страницу вниз. Прокрутка слайдера не нужна
 */
function handleTouch({carousel, lockScroll, event}) {
    if (!carousel) return;

    //Внутренние параметры
    const viewport = carousel.parentNode;
    const shiftToLockScroll = window.innerWidth * lockScroll;   //@1
    const startMarginLeft = parseFloat(window.getComputedStyle(carousel).marginLeft);

    let startMoveX = event.touches.item(0).clientX;
    const startMoveY = event.touches.item(0).clientY;

    let cumulativeShiftX = 0;   //@2
    let cumulativeShiftY = 0;
    
    let horizontalScrolling = false;    //@3
    let verticalScrolling = false;  //@4
    
    window.addEventListener('touchcancel', onTouchEnd);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchmove', onTouchMove, {passive: false});
    
    //Двигаем ленту слайдов
    function onTouchMove(moveEvent){

        try{
            if (verticalScrolling) {
                onTouchEnd();
                return;
            }

            //Почему-то событие предотвращается до touchend...
            if (horizontalScrolling) preventDefaultEvent(moveEvent);

            if (!verticalScrolling) {
                const currentMoveX = moveEvent.touches.item(0).clientX;
                const shiftX = currentMoveX - startMoveX;
                cumulativeShiftX += shiftX;
                startMoveX = currentMoveX;  //Последняя точка текущего движения становится стартовой для нового движения

                /*Режим прокрутки слайдера. Вертикальная прокрутка страницы
                будет запрещена */
                if (!horizontalScrolling && Math.abs(cumulativeShiftX) >= shiftToLockScroll) {
                    horizontalScrolling = true;
                }
                
                const targetMarginLeft = startMarginLeft + cumulativeShiftX;
                const carouselWidth = carousel.offsetWidth;
                const maxCarouselPosition = -carouselWidth + viewport.offsetWidth;

                //допустимые границы движения ленты слайдов и cumulativeShiftX
                if (targetMarginLeft <= 0
                    && targetMarginLeft >= maxCarouselPosition
                    && horizontalScrolling) {
                        requestAnimationFrame(function move(){
                            carousel.style.marginLeft = targetMarginLeft + 'px';
                        });
                        return;
                }
            }

            if (!horizontalScrolling) {
                const currentMoveY = moveEvent.touches.item(0).clientY;
                const shiftY = startMoveY - currentMoveY;
                cumulativeShiftY += shiftY;

                /*Режим вертикальной прокрутки страницы. Прокрутка слайдера будет
                запрещена */
                if (!horizontalScrolling && Math.abs(cumulativeShiftY) > shiftToLockScroll) {
                    verticalScrolling = true;
                }
            }

        } catch(e) {
            console.log('Slider Ошибка onTouchMove(): ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    //Завершаем работу. Передаём слайдеру скорость, которая была в последний момент
    function onTouchEnd() {
        window.removeEventListener('touchcancel', onTouchEnd);
        window.removeEventListener('touchend', onTouchEnd);
        window.removeEventListener('touchmove', onTouchMove, {passive: false});
    }

    function preventDefaultEvent(e) {
        if (e.cancelable) {
            e.preventDefault();
        } else {
            console.log('InfinitySlider. handle-touch: невозможно предотвратить прокрутку страницы');
        }
    }
}

export default handleTouch;