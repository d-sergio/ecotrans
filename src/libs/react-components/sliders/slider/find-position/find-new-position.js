/**Рассчитаем новую позицию.
 * При движении вперёд (shift < 0): если следующий слайд показался больше, чем на treshold,
 * то вытягиваем его до конца. При этом fraction означает какая часть следующего слайда уже показалась
 * 
 * При движении назад (shift > 0): если предыдущий слайд показался больше, чем на treshold,
 * то вытягиваем его до конца. При этом (1 - fraction) означает какая часть предыдущего слайда уже
 * показалась
 * 
 * Внезапная остановка движения слайда (shift == 0): работает аналогично, но направление
 * движения ленты слайдов перед остановкой определяется сравнением новой calculatedPosition и
 * currentPosition, к которой лента двигалась
 * 
 * calculatedPosition > currentPosition движение к предыдущим слайдам
 * calculatedPosition < currentPosition движение к следующим слайдам
 */
function findNewPosition(initialParams) {
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
            const calculatedPosition = Math.abs(currentMarginLeft - params.adjacentCorrect) / slideWidth;
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
            } else if (shift === 0 && calculatedPosition > currentPosition && (1 - fraction) > treshold) {
                return integer;
            } else if (shift === 0 && calculatedPosition > currentPosition && (1 - fraction) < treshold) {
                return integer + 1;
            }
            else if (shift === 0 && calculatedPosition < currentPosition && fraction > treshold) {
                return integer + 1;
            } else if (shift === 0 && calculatedPosition < currentPosition && fraction < treshold) {
                return integer;
            } else {
                return integer;  //например просто клик по неподвижному слайдеру
            }
        }
    } catch(e) {
        console.log('Slider Ошибка findNewPosition(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

export default findNewPosition;