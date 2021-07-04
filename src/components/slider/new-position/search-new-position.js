function searchNewPosition(initialParams) {
    try{
        //значения по умолчанию
        const defaults = {
            treshold: 0.2,
            carousel: null,
            currentPosition: 0
        };

        const params = Object.assign({}, defaults, initialParams);

        if (params.carousel !== null) {
            const shift = (params.speed < 0) ? -1 : 1;
            const currentMarginLeft = parseFloat(window.getComputedStyle(params.carousel).marginLeft);
            const slideWidth = params.carousel.children[0].offsetWidth;
            const calculatedPosition = Math.abs(currentMarginLeft) / slideWidth;
            const integer = Math.trunc(calculatedPosition); //округляем до целого вычисленную позицию
            const fraction = calculatedPosition - integer; //дробная часть позиции(см. описание выше)
            const treshold = params.treshold;
            const currentPosition = params.currentPosition;
                
            if (shift < 0 && fraction > treshold) {
                return integer + 1;
            } else if (shift < 0 && fraction < treshold){
                return integer;
            } else if (shift > 0 && (1 - fraction) > treshold) {
                return integer;
            } else if (shift > 0 && (1 - fraction) < treshold) {
                return integer + 1;
            } else if (shift == 0 && calculatedPosition > currentPosition && (1 - fraction) > treshold) {
                return integer;
            } else if (shift == 0 && calculatedPosition > currentPosition && (1 - fraction) < treshold) {
                return integer + 1;
            }
            else if (shift == 0 && calculatedPosition < currentPosition && fraction > treshold) {
                return integer + 1;
            } else if (shift == 0 && calculatedPosition < currentPosition && fraction < treshold) {
                return integer;
            } else {
                return integer;  //например просто клик по неподвижному слайдеру
            }
        }
    } catch(e) {
        console.log('Slider Ошибка searchNewPosition(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

export default searchNewPosition;