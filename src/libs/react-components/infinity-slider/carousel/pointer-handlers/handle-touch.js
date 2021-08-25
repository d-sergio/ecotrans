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

    /*Все события по умолчанию предотвращаются, а скролл страницы осуществляется
    через scrollPage().

    Причина:
    Предотвращение событий по умолчанию touchmove работает не во всех браузерах
    или не совсем так, как ожидается.*/
    event.preventDefault();

    //Внутренние параметры
    const viewport = carousel.parentNode;   //carousel должна быть прямым потомком viewport
    const shiftToLockScroll = window.innerWidth * lockScroll;   //#1
    const startMarginLeft = parseFloat(window.getComputedStyle(carousel).marginLeft);   //начальный сдвиг carousel

    const firstClientY = event.touches[0].clientY;  //начальное положение указателя на момент touchstart
    const startScrollTop = document.documentElement.scrollTop;  //на момент touchstart

    let startMoveX = event.touches[0].clientX;  //изменяемые значения, координаты
    let startMoveY = event.touches[0].clientY;  //в конце предыдущего touchmove

    let cumulativeShiftX = 0;   //#2
    let cumulativeShiftY = 0;
    
    let horizontalScrolling = false;    //#3
    let verticalScrolling = false;  //#4

    window.addEventListener('touchmove', onTouchMove, {passive: false});
    window.addEventListener('touchcancel', onTouchUp, {once: true});
    window.addEventListener('touchend', onTouchUp, {once: true});

    function onTouchMove(moveEvent) {
        if (verticalScrolling) {    //Начался вертикальный скролл
            scrollPage(moveEvent);
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
            const currentMoveX = moveEvent.touches[0].clientX;
            const shiftX = currentMoveX - startMoveX;
            cumulativeShiftX += shiftX; //Суммарный горизонтальный сдвиг
            startMoveX = currentMoveX;  //Последняя точка текущего движения становится стартовой для нового движения    

            /*Режим прокрутки слайдера. Вертикальная прокрутка страницы будет запрещена */
            if (!horizontalScrolling && Math.abs(cumulativeShiftX) >= shiftToLockScroll) {
                horizontalScrolling = true;
            }
        }
    }

    /**Суммарный вертикальный сдвиг */
    function calcCumulativeShiftY(moveEvent) {
        const currentMoveY = moveEvent.touches[0].clientY;
        const shiftY = startMoveY - currentMoveY;
        cumulativeShiftY += shiftY; //Суммарный вертикальный сдвиг
        startMoveY = currentMoveY;  //Последняя точка текущего движения становится стартовой для нового движения

        /*Режим вертикальной прокрутки страницы. Прокрутка слайдера будет запрещена */
        if (!verticalScrolling && !horizontalScrolling && Math.abs(cumulativeShiftY) > shiftToLockScroll) {
            verticalScrolling = true;
        }
    }

    //Двигаем ленту слайдов
    function moveCarousel(moveEvent) {
        if (!horizontalScrolling || verticalScrolling) return;

        try{
            calcCumulativeShiftX(moveEvent);
            
            const targetMarginLeft = startMarginLeft + cumulativeShiftX;
            const carouselWidth = carousel.offsetWidth;
            const maxCarouselPosition = -carouselWidth + viewport.offsetWidth;

            //допустимые границы движения ленты слайдов
            if (targetMarginLeft <= 0 && targetMarginLeft >= maxCarouselPosition) {
                    requestAnimationFrame(() => {
                        carousel.style.marginLeft = targetMarginLeft + 'px';
                    });
            }

        } catch(e) {
            console.log('InfinitySlider Ошибка moveCarousel(): ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    /**Скролл страницы */
    function scrollPage(moveEvent) {
        if (!verticalScrolling) return;

        const currentMoveY = moveEvent.touches[0].clientY;
        const shiftY = firstClientY - currentMoveY;

        requestAnimationFrame(() => window.scrollTo(0, startScrollTop + shiftY));
    }

    //Завершаем работу
    function onTouchUp() {
        window.removeEventListener('touchmove', onTouchMove, {passive: false});
    }
}

export default handleTouch;