import React, { useState, useRef, useEffect, useContext } from 'react';
import {container, errorStyle} from './field.module.css';
import Errors from '../../context/errors';
import Values from '../../context/values';
import ErrorMessage from '../../error-message';
import getClassNames from '../common/get-class-names';

/**Поле input
 * 
 * Props:
 * @param {string} name - имя поля
 * @param {string | object} className - className объект стилей CSS.
 * inactive - стиль неактивного поля
 * active - стиль активного поля
 * error - стиль поля с ошибкой
 * 
 * Также можно передать один стиль без объекта.
 * 
 * @param {node} error - элемент, в который будет помещено сообщение об ошибке
 * валидации. По умолчанию используется <ErrorMessage.Default/>
 * Значение error='none' указывает, что текст ошибки пользователью не показывается.
 * 
 * Context:
 * Values - объект, в поле values[props.name] которого хранится значение для текущего
 * компонента Input. Компонент рассматривает его как название, которое увидит
 * пользователь прямо в поле ввода текста. Название будет скрываться при фокусировке
 * на компоненте
 * 
 * Errors - объект, в поле errors[props.name] которого хранится текст сообщения об
 * ошибке валидации
*/
function Input(props) {
    const fieldRef = useRef(null);
    const errorRef = useRef(false);

    const [errorMessage, setErrorMessage] = useState();
    const errors = useContext(Errors);
    const values = useContext(Values);
    const [value, setValue] = useState(values[props.name]);

    useEffect(initErrors, []);
    useEffect(() => {
        if (errors !== undefined) showError();
    }, [errors]);


    /**Активный вид поля*/
    function setActiveField() { 
        if (fieldRef.current
            && props.className) {

                fieldRef.current.className = getClassNames(props.className).active;
        }
    }

    /**Неактивный вид поля, если оно пустое или видно только
     * только его название
    */
    function setInActiveField() {
        if (fieldRef.current
            && props.className
            && (value === '' || value === values[props.name])) {
                
                fieldRef.current.className = getClassNames(props.className).inactive;
        }
    }

    /**Применить к полю стиль, соответствующий ошибке */
    function setErrorStyle() {  
        if (errors) {

            //Подсветка поля с ошибкой
            if (errors[props.name]) {

                return getClassNames(props.className).error;

            }
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
            
            if (fieldRef.current) fieldRef.current.className = setErrorStyle();

            if (props.error !== 'none') errorRef.current.style.opacity = 1;

            setErrorMessage(errors[props.name]);

        } else {
            errorRef.current.style.opacity = 0;
        }
    }

    /**Скрыть название поля, переключить вид на активный */
    function onFocus() {

        setActiveField();

        if (value === values[props.name]) setValue('');
    }

    /**Если поле осталось пустым, вернуть неактивный вид и название */
    function onBlur() {
        
        setInActiveField();

        if (value === '') setValue(values[props.name]);
    }

    function onChange(e) {
        /**Скрыть сообщение об ошибке валидации */
        if (errorRef.current
            && errors) {
                
                if (errors[props.name]) errorRef.current.style.opacity = 0;
        }

        setValue(e.target.value);
    }

    return(
        <div className={container}>
            <input
                ref={fieldRef}
                className={getClassNames(props.className).inactive}
                name={props.name}
                type="text"
                onFocus={onFocus}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                autoComplete="off"
            />

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

export default Input;

Input.defaultProps = {
    error: <ErrorMessage.Default/>,
    name: ''
};