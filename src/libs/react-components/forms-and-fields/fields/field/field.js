import React, { useState, useRef, useEffect, useContext } from 'react';
import {container, errorStyle} from './field.module.css';
import Errors from '../../context/errors';
import ErrorMessage from '../../error-message';

/**Поле input или textarea
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
 * Элемент [2] - стиль поля с ошибкой
 * 
 * Также можно передать один стиль без массива.
 * 
 * @param {node} error - элемент, в который будет помещено сообщение об ошибке
 * валидации. По умолчанию используется <ErrorMessage.Default/>
 * Значение error='none' указывает, что текст ошибки пользователью не показывается.
*/
function Field(props) {
    const fieldRef = useRef(null);
    const errorRef = useRef(false);

    const [value, setValue] = useState(props.fieldName);
    const [errorMessage, setErrorMessage] = useState();
    const errors = useContext(Errors);

    useEffect(() => initField(), []);
    useEffect(() => initErrors(), []);
    useEffect(() => {
        if (errors !== undefined) showError();
    }, [errors]);

    /**Тип поля*/
    function initField() {
        const className = initFieldStyle();

        if (props.fieldType === 'input') {

            return(
                <input
                    ref={fieldRef}
                    className={className}
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
                    className={className}
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
        if (!props.classNames) return;

        if (Array.isArray(props.classNames)) {

            return props.classNames[0];

        } else if (typeof props.classNames === 'string') {
            
            return props.classNames;
        }   
    }

    /**Активный вид поля*/
    function setActiveField() {  

        if (fieldRef.current
            && Array.isArray(props.classNames)
            && props.classNames[1] !== undefined) {

                fieldRef.current.className = props.classNames[1];
        }
    }

    /**Неактивный вид поля, если оно пустое или видно только
     * только его название
    */
    function setInActiveField() {

        if (fieldRef.current
        && Array.isArray(props.classNames)
        && props.classNames.length > 1
        && (value === '' || value === props.fieldName)) {
            
            fieldRef.current.className = props.classNames[0];

        }
    }

    /**Применить к полю стиль, соответствующий ошибке, если такой стиль
     * получен из пропс
    */
    function setErrorField() {
        if (!props.classNames) return;
        
        //Поле активно, есть ошибки и массив стилей
        if (Array.isArray(props.classNames) && errors) {

            //Подсветка поля с ошибкой
            if (errors[props.name] && props.classNames[2] !== undefined) {

                return props.classNames[2];

            } else {
                //Нет стиля для подсветки поля с ошибкой или ошибки нет
                return props.classNames[1];
            }

        } else {
            //Стиль не является массивом
            return props.classNames;
        }
    }

    function initErrors() {
        if (!errorRef.current) return;

        errorRef.current.style.opacity = 0;
    }

    /**Показать сообщение об ошибке валидации
     * Подсветить поле соответствующим стилем
     */
    function showError() {
        if (!errorRef.current) return;

        if (errors[props.name]) {
            
            if (fieldRef.current) fieldRef.current.className = setErrorField();

            if (props.error !== 'none') errorRef.current.style.opacity = 1;

            setErrorMessage(errors[props.name]);

        } else {
            errorRef.current.style.opacity = 0;
        }
    }

    /**Скрыть название поля, переключить вид на активный */
    function onFocus() {

        setActiveField();

        if (value === props.fieldName) setValue('');
    }

    /**Если поле осталось пустым, вернуть неактивный вид и название */
    function onBlur() {
        
        setInActiveField();

        if (value === '') setValue(props.fieldName);
    }

    function onChange(e) {
        /**Скрыть сообщение об ошибке валидации */
        if (errorRef.current
            && errors[props.name]) {

                errorRef.current.style.opacity = 0;
        }

        setValue(e.target.value);
    }

    return(
        <div className={container}>
            {initField()}

            <div className={errorStyle} ref={errorRef}>
                {
                    props.error !== 'none' ?
                    React.cloneElement(props.error, {children: errorMessage})
                    : null
                }
            </div>
        </div>
    );
}

export default Field;

Field.defaultProps = {
    fieldType: 'input',
    error: <ErrorMessage.Default/>
};