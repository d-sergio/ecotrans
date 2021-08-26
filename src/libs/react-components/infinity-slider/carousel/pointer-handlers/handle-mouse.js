/**
 * Принимаемые параметры:
 * @param {object} должен содержать следующие поля:
 *      @param {node} carousel - лента слайдов
 *      @param {event} event - событие мыши
*/
function handleMouse({carousel, event}) {

    //Внутренние параметры
    let startMoveX = event.pageX;
    let currentMoveX = startMoveX;
    let shift = 0;  //К предыдущему слайду: shift > 0; К следующему слайду shift < 0

    const viewport = carousel.parentNode;   //carousel должна быть прямым потомком viewport
    
    event.preventDefault(); //Предотвратить события drag
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', moveCarousel);

    //Двигаем ленту слайдов
    function moveCarousel(event){
        try{
            carousel.style.cursor = 'grabbing';

            currentMoveX = event.pageX;
            shift = currentMoveX - startMoveX;

            const currentMarginLeft = parseFloat(window.getComputedStyle(carousel).marginLeft);
            const targetMarginLeft = currentMarginLeft + shift;

            const carouselWidth = carousel.offsetWidth;
            const maxCarouselPosition = -carouselWidth + viewport.offsetWidth;

            requestAnimationFrame(() => {
                //допустимые границы движения ленты слайдов
                if (targetMarginLeft <= 0 && targetMarginLeft >= maxCarouselPosition) {
                    carousel.style.marginLeft = targetMarginLeft + 'px';
                }
            });

            startMoveX = currentMoveX;  //Последняя точка текущего движения становится стартовой для нового движения

        } catch(e) {
            console.log('Slider Ошибка moveCarousel(): ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    //Вычисляем новую позицию
    function onMouseUp() {
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('mousemove', moveCarousel);
        
        carousel.style.cursor = 'pointer';
    }
}

export default handleMouse;