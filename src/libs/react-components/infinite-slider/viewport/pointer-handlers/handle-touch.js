/**
 * #1 shiftToLockScroll -Сдвиг, после которого блокируется скролл страницы или
 * слайдера. lockScroll - коэффициент 0 до 1
 * 
 * #2 Суммарный сдвиг с момента touchstart. Накапливается при каждом горизонтеальном
 * движении. При достижении lockScroll блокируется вертикальная прокрутка
 * стариницы и начинается прокрутка слайдера
 * 
 * #3 Горизонтальная прокрутка слайдера начнётся, когда модуль cumulativeShiftX
 * превысит lockScroll
 * 
 * #4 Пользователь просто прокручивает страницу вниз. Прокрутка слайдера не нужна
 */
function handleTouch({carousel, lockScroll, event}) {
    if (!carousel) return;

    //Внутренние параметры
    //const viewport = carousel.parentNode;   //carousel должна быть прямым потомком viewport
    const shiftToLockScroll = window.innerWidth * lockScroll;   //#1

    const startScrollTop = document.documentElement.scrollTop;  //на момент touchstart

    let startX = event.touches[0].clientX;  //изменяемые значения, координаты
    let startY = event.touches[0].clientY;  //в конце предыдущего touchmove

    let cumulativeShiftX = 0;   //#2
    let cumulativeShiftY = 0;
    
    let horizontalScrolling = false;    //#3
    let verticalScrolling = false;  //#4

    /*Обрабатываются события pointer, так как событие touchmove почему-то
    прерывается после нового рендера в процессе пролистывания слайдера.
    При этом не происходит touchend или touchcancel. И текущее событие
    touchmove никак нельзя завершить. Это приводит к тому, что карусель
    перестаёт двигаться или двигается не правильно*/
    window.addEventListener('pointerup', onTouchEnd);
    window.addEventListener('pointercancel', onTouchEnd);
    window.addEventListener('pointermove', onTouchMove, {passive: false});

    function onTouchMove(moveEvent) {
        if (verticalScrolling) {    //Начался вертикальный скролл
            onTouchEnd();
            return;                 //Остальное пропускаем
        }

        if (horizontalScrolling) {  //Началась прокрутка слайдера
            moveCarousel(moveEvent);
            return;                 //Остальное пропускаем
        }
        
        if (!verticalScrolling && !horizontalScrolling) {   //надо выяснить, что делает пользователь
            calcCumulativeShiftX(moveEvent);                //листает слайдер?
            calcCumulativeShiftY(moveEvent);                //скроллит страницу?
            return;
        }
    }

    /**Суммарный горизонтальный сдвиг */
    function calcCumulativeShiftX(moveEvent) {
        if (!verticalScrolling) {
            const currentX = moveEvent.clientX;
            const shiftX = currentX - startX;
            cumulativeShiftX += shiftX; //Суммарный горизонтальный сдвиг
            startX = currentX;  //Последняя точка текущего движения становится стартовой для нового движения    

            /*Режим прокрутки слайдера. Вертикальная прокрутка страницы будет запрещена */
            if (!horizontalScrolling && Math.abs(cumulativeShiftX) >= shiftToLockScroll) {
                horizontalScrolling = true;
            }
        }
    }

    /**Суммарный вертикальный сдвиг */
    function calcCumulativeShiftY(moveEvent) {
        const currentY = moveEvent.clientY;
        const shiftY = startY - currentY;
        cumulativeShiftY += shiftY; //Суммарный вертикальный сдвиг
        startY = currentY;  //Последняя точка текущего движения становится стартовой для нового движения

        /*Режим вертикальной прокрутки страницы. Прокрутка слайдера будет запрещена */
        if (!verticalScrolling && !horizontalScrolling && Math.abs(cumulativeShiftY) > shiftToLockScroll) {
            verticalScrolling = true;
        }
    }

    //Двигаем ленту слайдов
    function moveCarousel(moveEvent) {
        if (!horizontalScrolling || verticalScrolling) return;

        const currentScrollTop = document.documentElement.scrollTop;
        if (currentScrollTop !== startScrollTop) {
            onTouchEnd();
        }
        
        try{
            requestAnimationFrame(() => {
                const currentX = moveEvent.pageX;
                const shiftX = currentX - startX;

                const currentMarginLeft = parseFloat(window.getComputedStyle(carousel).marginLeft);
                const targetMarginLeft = currentMarginLeft + shiftX;

                //const carouselWidth = carousel.offsetWidth;
                //const maxCarouselPosition = -carouselWidth + viewport.offsetWidth;

                //Проверить допустимые границы движения ленты слайдов
                //if (targetMarginLeft <= 0 && targetMarginLeft >= maxCarouselPosition) {
                    carousel.style.marginLeft = targetMarginLeft + 'px';
                //}
                
                startX = currentX;  //Последняя точка текущего движения становится стартовой для нового движения
            });
        } catch(e) {
            console.log('InfinitySlider Ошибка moveCarousel(): ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    //Завершение работы
    function onTouchEnd() {
        window.removeEventListener('pointerup', onTouchEnd);
        window.removeEventListener('pointercancel', onTouchEnd);
        window.removeEventListener('pointermove', onTouchMove, {passive: false});
    }
}

export default handleTouch;