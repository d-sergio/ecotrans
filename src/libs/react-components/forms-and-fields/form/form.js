import React, { useRef, useState } from 'react';
import Errors from '../context/errors';

/**Форма работает через контекст
 * 
 * Props:
 * 
 * @param { {function} } validate - объект, в котором ключ - имя проверяемого поля,
 * значение - функция валидации, возвращающая текст с описанием ошибки или undefined,
 * если ошибок нет
 * @param {className} className - стиль CSS
 */
function Form(props) {
    const formRef = useRef(null);

    const [errors, setErrors] = useState();

    function onSubmit(e) {
        e.preventDefault();

        if (!formRef.current) return;

        //валидация формы
        const validationErrors = validateFields();

        setErrors(validationErrors);

        //выход, если есть хотя бы одна ошибка
        for (let value of Object.values(validationErrors)) {
            if (value !== undefined) {
                return;
            }
        }

        const formData = new FormData(formRef.current);
    }

    /**Значения полей проходят проверку через соответствующие их имени валидаторы*/
    function validateFields() {
        if (!formRef.current) return;

        let validationErrors = {};

        for (let elem of formRef.current) {
            if (typeof props.validate[elem.name] === 'function') {
                const validationResult = props.validate[elem.name](elem.value);

                validationErrors[elem.name] = validationResult;
            }
        }

        return validationErrors;
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