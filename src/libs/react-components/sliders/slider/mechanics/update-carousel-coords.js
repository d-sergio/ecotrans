/**Задаём margin-left для carousel, соответствующий текущей позиции слайдера */
function updateCarouselCoords({carousel, currentPosition, adjacentCorrect}) {
    try{        
        if (!carousel) return;

        const carouselMarginLeft = -carousel.children[0].offsetWidth * currentPosition;
        
        carousel.style.marginLeft = carouselMarginLeft + adjacentCorrect + 'px';

    } catch(e) {

        console.log('Slider Ошибка updateCarouselCoords(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

export default updateCarouselCoords;