import React, { useRef, useState } from 'react';
import Errors from '../context/errors';

/**Форма работает через контекст
 * 
 * Props:
 * 
 * @param { {function} } validate - объект, в котором ключ - имя проверяемого поля,
 * значение - функция валидации, возвращающая true, если валидация прошла успешно,
 * и false, если не успешно.
 * @param {[className]} className - стиль CSS
 */
function Form(props) {
    const formRef = useRef(null);

    const [errors, setErrors] = useState();

    function onSubmit(e) {
        e.preventDefault();

        if (!formRef.current) return;

        let valids = {};

        for (let elem of formRef.current) {
            if (typeof props.validate[elem.name] === 'function') {
                const validationResult = props.validate[elem.name](elem.value);

                valids[elem.name] = validationResult;
            }
        }

        setErrors(valids);
    }
    
    return(
        <form
            ref={formRef}
            className={props.className}
            onSubmit={onSubmit}>

            <Errors.Provider value={errors}>
                {props.children}
            </Errors.Provider>            

        </form>
    );
}

export default Form;

Form.defaultProps = {
    validate: {}
};