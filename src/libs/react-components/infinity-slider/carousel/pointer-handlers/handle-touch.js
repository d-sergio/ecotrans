/**
 * @1 shiftToLockScroll -Сдвиг, после которого блокируется скролл страницы или
 * слайдера. lockScroll - коэффициент 0 до 1
 * 
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
    let startMoveY = event.touches.item(0).clientY;

    let cumulativeShiftX = 0;   //@2
    let cumulativeShiftY = 0;
    
    let horizontalScrolling = false;    //@3
    let verticalScrolling = false;  //@4

    window.addEventListener('touchmove', onTouchMove, {passive: false});
    window.addEventListener('touchcancel', onTouchEnd, {once: true});
    window.addEventListener('touchend', onTouchEnd, {once: true});

    function onTouchMove(moveEvent) {
        if (verticalScrolling) {
            onTouchEnd();
            return;
        }

        if (horizontalScrolling) {
            preventDefaultEvent(moveEvent);
            moveCarousel(moveEvent);
            return;
        }
        
        if (!verticalScrolling && !horizontalScrolling) {
            calcCumulativeShiftX(moveEvent);
            calcCumulativeShiftY(moveEvent);
            return;
        }
    }

    function calcCumulativeShiftX(moveEvent) {
        if (!verticalScrolling) {
            calcShiftX(moveEvent);

            /*Режим прокрутки слайдера. Вертикальная прокрутка страницы
            будет запрещена */
            if (!horizontalScrolling && Math.abs(cumulativeShiftX) >= shiftToLockScroll) {
                horizontalScrolling = true;
            }
        }
    }

    function calcCumulativeShiftY(moveEvent) {
        const currentMoveY = moveEvent.touches.item(0).clientY;
        const shiftY = startMoveY - currentMoveY;
        cumulativeShiftY += shiftY;
        startMoveY = currentMoveY;  //Последняя точка текущего движения становится стартовой для нового движения
        /*Режим вертикальной прокрутки страницы. Прокрутка слайдера будет
        запрещена */
        if (!horizontalScrolling && Math.abs(cumulativeShiftY) > shiftToLockScroll) {
            verticalScrolling = true;
        }
    }

    //Двигаем ленту слайдов
    function moveCarousel(moveEvent) {
        if (!horizontalScrolling || verticalScrolling) return;

        try{
            calcShiftX(moveEvent);
            
            const targetMarginLeft = startMarginLeft + cumulativeShiftX;
            const carouselWidth = carousel.offsetWidth;
            const maxCarouselPosition = -carouselWidth + viewport.offsetWidth;

            //допустимые границы движения ленты слайдов и cumulativeShiftX
            if (targetMarginLeft <= 0 && targetMarginLeft >= maxCarouselPosition) {
                    requestAnimationFrame(function move(){
                        carousel.style.marginLeft = targetMarginLeft + 'px';
                    });
            }

        } catch(e) {
            console.log('Slider Ошибка onTouchMove(): ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    function calcShiftX(ev) {
        const currentMoveX = ev.touches.item(0).clientX;
        const shiftX = currentMoveX - startMoveX;
        cumulativeShiftX += shiftX;
        startMoveX = currentMoveX;  //Последняя точка текущего движения становится стартовой для нового движения
    }

    function preventDefaultEvent(e) {
        if (e.cancelable) {
            e.preventDefault();
        } else {
            horizontalScrolling = false;
            verticalScrolling = true;
            console.log('InfinitySlider. handle-touch: невозможно предотвратить прокрутку страницы');
        }
    }

    //Завершаем работу
    function onTouchEnd() {
        window.removeEventListener('touchmove', onTouchMove, {passive: false});
    }
}

export default handleTouch;