import React, { useState, useRef, useEffect, useContext } from 'react';
import {container, errorStyle} from './field.module.css';
import Errors from '../context/errors';
import ErrorMessage from '../error-message';

/**Для корректной работы компоненту Field потребуется key
 * 
 * Props:
 * @param {string} name - имя поля
 * @param {string} fieldType - 'input' / 'textarea' - соответствующий вид поля
 * @param {string} fieldName - название поля, которое отображается внутри Field,
 * если пользователь ничего не напечатал. И скрываться при фокусировке и при
 * наборе текста
 * @param {[className]} classNames - className массив стилей CSS.
 * Элемент [0] - стиль неактивного поля
 * Элемент [1] - стиль активного поля
 * 
 * Также можно передать один стиль без массива.
 * @param {node} error - сообщение об ошибке (почему валидация не была
 * успешной)
*/
function Field(props) {
    const fieldRef = useRef(null);
    const errorRef = useRef(false);

    const [value, setValue] = useState(props.fieldName);
    const [errorMessage, setErrorMessage] = useState();
    const errors = useContext(Errors);

    useEffect(() => initField(), []);
    useEffect(() => initErrors(), []);
    useEffect(() => initFieldStyle(), []);
    useEffect(() => {
        if (errors !== undefined) checkError();
    }, [errors]);

    /**Тип поля*/
    function initField() {
        if (props.fieldType === 'input') {

            return(
                <input
                    ref={fieldRef}
                    name={props.name}
                    type="text"
                    onFocus={onFocus}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            )
        } else if (props.fieldType === 'textarea') {

            return(
                <textarea
                    ref={fieldRef}
                    name={props.name}
                    type="text"
                    onFocus={onFocus}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            )
        }
    }

    /**Стиль неактивного поля */
    function initFieldStyle() {
        if (!fieldRef.current || !props.classNames) return;

        if (Array.isArray(props.classNames)) {
            fieldRef.current.className = props.classNames[0];

        } else if (typeof props.classNames === 'string') {
            
            fieldRef.current.className = props.classNames;
        }   
    }

    function initErrors() {
        if (!errorRef.current) return;

        errorRef.current.style.opacity = 0;
    }

    /**Показать сообщение об ошибке валидации */
    function checkError() {
        if (!errorRef.current) return;

        if (errors[props.name]) {
            errorRef.current.style.opacity = 1;
            setErrorMessage(errors[props.name]);

        } else {
            errorRef.current.style.opacity = 0;
        }
    }

    function onFocus() {
        if (value === props.fieldName) setValue('');

        if (!fieldRef.current) return;

        /**Активный вид поля*/
        if (Array.isArray(props.classNames) && props.classNames.length > 1) {
            fieldRef.current.className = props.classNames[1];
        }
    }

    function onBlur() {
        if (value === '') setValue(props.fieldName);

        /**Неактивный вид поля, если оно пустое или видно только
         * только его название
         */
        if (Array.isArray(props.classNames)
            && props.classNames.length > 1
            && (value === '' || value === props.fieldName)) {
            fieldRef.current.className = props.classNames[0];
        }
    }

    function onChange(e) {
        setValue(e.target.value);

        /**Скрыть сообщение об ошибке валидации */
        if (!errorRef.current || !errors) return;

        if (errors[props.name]) {
            errorRef.current.style.opacity = 0;
        }
    }

    return(
        <div className={container}>
            {initField()}

            <div className={errorStyle} ref={errorRef}>
                {
                    props.error ?
                        React.cloneElement(props.error, {children: errorMessage})
                        : <ErrorMessage.Default>{errorMessage}</ErrorMessage.Default>
                }
            </div>
        </div>
    );
}

export default Field;

Field.defaultProps = {
    fieldType: 'input'
};