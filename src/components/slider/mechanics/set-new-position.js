import getVisible from './get-visible';

/**Установить новую позицию. Также добавляет новые слайды по необходимости
 * destination - новая позиция слайдера
 */
function setNewPosition({destination, state, setState, params, viewport, carousel}) {
    /**текущая позиция и сдвиг margin-left carousel станут предыдущими, после setState*/
    let prevPosition = state.currentPosition;
    let prevMargin = 0;
    let newChildren = state.children;   //возможно, будут добавлены/удалены слайды
    let newPosition = destination;  //возможно, будет корректироваться позиция из-за
                                    //добавления/удаления слайдов
    
    //Заранее вычислим всё, что может потребоваться далее, в зависимости от условий
    const currentMarginLeft = parseFloat(window.getComputedStyle(carousel).marginLeft);
    const correctMarginLeft = carousel.firstChild.offsetWidth * params.children.length;

    const visibleArgs = {
        visible: params.visible,
        viewport: viewport,
        carousel: carousel
    };
    const visible = getVisible(visibleArgs);

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

        /*Если добавлены новые слайды слева, то надо компенсировать сдвиг
        карусели в обратную сторону*/
        prevMargin = currentMarginLeft - correctMarginLeft;
    }
    //Добавляем целую ленту params.children справа
    if (destination + visible >= state.children.length) {
        newChildren = newChildren.concat(params.children);

        prevMargin = currentMarginLeft;
    }

    /*Чтобы не нагружать браузер бесконечно добавляемыми слайдами, они иногда
    удаляются. Поскольку добавляются целые ленты params.children, то удаление
    происходит тоже целыми лентами params.children. Для этого высчитывается
    сколько таких лент слева и справа от видимой ленты params.children, в которой
    находится currentPosition. Смысл в том, что должно быть не более одной целой
    ленты слева и справа от viewport.
    */
    //Целых лент params.children слева и справа
    const factorLeft = Math.floor( newPosition / params.children.length );
    const factorRight = Math.floor( ( state.children.length - newPosition - 1 ) / params.children.length);

    //Удаляем лишние слева. Корректируем покидаемую (prevPosition) и новую позицию
    if (factorLeft >= 2) {
        newChildren = newChildren.slice( (factorLeft - 1) * params.children.length );
        newPosition = newPosition - (factorLeft - 1) * params.children.length;
        prevPosition = prevPosition - (factorLeft - 1) * params.children.length;

        /*Если удалены слайды слева, то надо компенсировать сдвиг
        карусели в обратную сторону*/
        prevMargin = currentMarginLeft + correctMarginLeft;
    }

    //Удаляем лишние справа
    if (factorRight >= 2) {
        newChildren = newChildren.slice(0, (factorLeft + 2) * params.children.length);
        prevMargin = currentMarginLeft;
    }

    setState(
        {
            ...setState,
            prevPosition: prevPosition,
            prevMargin: prevMargin,
            currentPosition: newPosition,
            children: newChildren
        }
    );
}

export default setNewPosition;