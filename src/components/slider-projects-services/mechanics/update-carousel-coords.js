/**Задаём margin-left для carousel, соответствующий текущей позиции слайдера */
function updateCarouselCoords(carousel, currentPosition, adjacentCorrect) {
    try{        
        if (carousel !== null){

            const carouselMarginLeft = -carousel.children[0].offsetWidth * currentPosition;
            
            carousel.style.marginLeft = carouselMarginLeft + adjacentCorrect + 'px';
        } else {
            console.log(`Slider. updateCarouselCoords() остановлен. refs: this.carousel.current is ${carousel}.`);
        }

    } catch(e) {

        console.log('Slider Ошибка updateCarouselCoords(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

export default updateCarouselCoords;