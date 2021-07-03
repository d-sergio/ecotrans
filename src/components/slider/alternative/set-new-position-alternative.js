import getVisible from '../get-visible';

function setNewPosition(shift, state, setState, params) {
    if (shift === 0) return;

    const visible = getVisible(params.visible);
    const childrenLength = params.children.length;
    let newChildren = state.children;

    /*Движение вправо*/
    if (shift > 0) {
        //Сначала удалить всё лишнее слева
        //Поэтому текущий слайд окажется на нулевой позиции
        newChildren = newChildren.slice(state.currentPosition);

        //Заполняем children до целевой позиции + видимые слайды справа
        for (i = visible; i <= shift + visible - 1; i++) {
            
            //Сколько целых params.children пройдено
            const factor = Math.floor(i / childrenLength);

            let number = i;

            /*Если вышел за пределы массива, то начинаем добавлять снова
            с нулевого индекса*/
            if (i >= childrenLength) {
                number = i - childrenLength * factor;
            }

            newChildren.push(params.children[number]);
        }
    }
}

export default setNewPosition;