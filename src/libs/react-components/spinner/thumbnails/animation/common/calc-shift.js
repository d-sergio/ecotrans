    /**Находим кратчайший путь от текущей позиции до новой. Для этого считаем
     * расстояние между позициями в прямом и обратном направлении. Возвращается
     * минимальное по модулю.
    */
     function calcShift(newPosition, prevPosition, childrenLength) {

        /*Листаем вперёд */
        if (newPosition > prevPosition) {
            const shiftForward = newPosition - prevPosition;
            const shiftBackward = newPosition - childrenLength - prevPosition;
            
            const shift = Math.abs(shiftForward) < Math.abs(shiftBackward) ?
                shiftForward
                : shiftBackward;

            return shift;
            
        /*Листаем вперёд назад*/
        } else if (newPosition < prevPosition) {
            const shiftForward = newPosition - prevPosition;
            const shiftBackward = newPosition + childrenLength - prevPosition;

            const shift = Math.abs(shiftForward) < Math.abs(shiftBackward) ?
                shiftForward
                : shiftBackward;

            return shift;
            
        } else {
            console.log(`Spinner. Thumnails. calcShift. Новая позиция равна текущей или их значения некорректны`);
            return 0;
        }
    }

    export default calcShift;