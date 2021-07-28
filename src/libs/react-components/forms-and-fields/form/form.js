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
        const validResults = validateFields();

        const noErrors = checkResults(validResults);

        if (noErrors) {
            sendForm();

            return;
        }

        setErrors(validResults);
    }

    /**Значения полей проходят проверку через соответствующие их имени валидаторы*/
    function validateFields() {
        if (!formRef.current) return;

        let validResults = {};

        for (let elem of formRef.current) {
            if (typeof props.validate[elem.name] === 'function') {
                const validResult = props.validate[elem.name](elem.value);

                validResults[elem.name] = validResult;
            }
        }

        return validResults;
    }

    /**Проверить нет ли ошибок валидации */
    function checkResults(validResults) {
        //выход, если есть хотя бы одна ошибка
        for (let value of Object.values(validResults)) {
            if (value !== undefined) {
                return false;
            }
        }

        return true;
    }

    function sendForm() {
        if (!formRef.current) return;

        console.log('Form Ok');
        const formData = new FormData(formRef.current);
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