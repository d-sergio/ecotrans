import getVisible from './get-visible';

/**Установить новую позицию. Также добавляет новые слайды по необходимости */
function setNewPosition(destination, state, setState, params) {
    let prevPosition = state.currentPosition;   //текущая позиция станет предыдущей, после setState
    let newPosition = destination;
    let newChildren = state.children;

    const visible = getVisible(params.visible);

    /*Добавление слайдов в carousel слева или справа дублированием children.
    Смысл в том, что слева и справа от новой позиции всегда должен быть запас
    элементов, равный или больше visible.
    Особое внимание надо братить на то, что params.children - это те
    элементы, которые были получены компонентом Slider из props.children, а
    state.children - это те элементы, которые фактически отрендерены. Поэтому
    к фактически отреднеренным добавляются полученные из пропс.*/
    //Добавляем целую ленту params.children слева
    if (destination - visible < 0) {
        newChildren = newChildren.concat(params.children);
        prevPosition = params.children.length + state.currentPosition;
        newPosition = params.children.length + destination;
    }
    //Добавляем целую ленту params.children справа
    if (destination + visible >= state.children.length - 1) {
        newChildren = newChildren.concat(params.children);
    }

    /*Чтобы не нагружать браузер бесконечно добавляемыми слайдами, они иногда
    удаляются. Поскольку добавляются целые ленты params.children, то удаление
    происходит тоже целыми лентами params.children. Для этого высчитывается
    сколько их слева и справа от той целой ленты params.children, в которой
    находится currentPosition. Смысл в том, что их должно быть не более одной
    слева и справа.
    */
    //Целых лент params.children слева и справа
    const factorLeft = Math.floor( newPosition / params.children.length );
    const factorRight = Math.floor( ( state.children.length - newPosition - 1 ) / params.children.length);

    //Удаляем лишние слева. Корректируем покидаемую (prevPosition) и новую позицию
    if (factorLeft >= 2) {
        newChildren = newChildren.slice( (factorLeft - 1) * params.children.length );
        newPosition = newPosition - (factorLeft - 1) * params.children.length;
        prevPosition = prevPosition - (factorLeft - 1) * params.children.length;
    }

    //Удаляем лишние справа
    if (factorRight >= 2) {
        newChildren = newChildren.slice(0, (factorLeft + 2) * params.children.length);
    }

    setState(
        {
            prevPosition: prevPosition,
            currentPosition: newPosition,
            children: newChildren
        }
    );
}

export default setNewPosition;