function updateCarouselCoords(carousel, currentPosition) {
    try{        
        if (carousel !== null){

            const carouselMarginLeft = -carousel.children[0].offsetWidth * currentPosition;

            carousel.style.marginLeft = carouselMarginLeft + 'px';
        } else {
            console.log(`Slider. updateCarouselCoords() остановлен. refs: this.carousel.current is ${carousel}.`);
        }

    } catch(e) {

        console.log('Slider Ошибка updateCarouselCoords(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

export default updateCarouselCoords;