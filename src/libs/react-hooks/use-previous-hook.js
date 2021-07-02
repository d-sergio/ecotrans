import React, {useEffect, useRef} from "react";

/**Хук для сохранения предыдущего состояния/пропс
 * 
 */
function usePrevious(value) {
    //В рефах можно хранить что угодно. Это универсальный контейнер
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]); //только если value изменилось

    // Вернуть предыдущее значение (происходит перед обновлением в useEffect выше)
    return ref.current;
}

export default usePrevious;