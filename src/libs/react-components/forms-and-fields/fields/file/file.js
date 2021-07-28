import React, { useRef, useState, useEffect, useContext } from 'react';
import {container, file, errorStyle} from './file.module.css';
import Errors from '../../context/errors';
import ErrorMessage from '../../error-message';

/**Поле загрузки файлов
 * 
 * Props:
 * 
 * @param {string} classNames - className массив стилей CSS.
 * Элемент [0] - стиль неактивного поля
 * Элемент [1] - стиль активного поля
 * Элемент [2] - стиль поля с ошибкой
 *  * 
 * Также можно передать один стиль без массива.
 * 
 * @param {string} fieldName - имя поля, которое увидит пользователь
 * @param {string} name - имя поля для формы
 * @param {string} accept - типы файлов, доступные для загрузки
 * Например 'image/jpeg,image/png'. Так же, как с обычным <input type="file"/>
 * @param {node} error - элемент, в который будет помещено сообщение об ошибке
 * валидации. По умолчанию используется <ErrorMessage.Default/>
 * Значение error='none' указывает, что текст ошибки пользователью не показывается.
*/
function File(props) {
    const inputRef = useRef(null);
    const fileRef = useRef(null);
    const errorRef = useRef(false);

    const [fileName, setFileName] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const errors = useContext(Errors);

    useEffect(() => initErrors(), []);
    useEffect(() => updateFieldStyle(), [fileName]);
    useEffect(() => {
        if (errors !== undefined) showError();
    }, [errors]);

    /**Показать название файла */
    function onChange() {
        if (!fileRef.current || !fileRef.current.value) return;

        /**Скрыть сообщение об ошибке валидации */
        if (errorRef.current
            && errors) {

                if (errors[props.name]) errorRef.current.style.opacity = 0;
        }

        const name = getFileName(fileRef.current.value);

        setFileName(name);
    }

    /**Показывается только имя файла + расширение */
    function getFileName(value) {
        const separator = getSeparator(value);

        if (!separator) return value;

        const name = value.split(separator).slice(-1);

        return name;
    }

    /**Уточнить какой разделитель пути используется */
    function getSeparator(value) {

        if (value.includes('/')) {

            return '/';

        } else if (value.includes('\\')) {

            return '\\';

        } else {

            return null;
        }
    }

    /**Установить стиль поля */
    function updateFieldStyle() {

        if (!inputRef.current || !props.classNames) return;

        const initStyle = getFieldStyle();
        
        inputRef.current.className = initStyle;
    }

    /**Взять стиль поля из пропс */
    function getFieldStyle() {

        if (!props.classNames) return;

        //Массив стилей?
        if (Array.isArray(props.classNames)) {

            return changeFieldStyle();

        } else if (typeof props.classNames === 'string') {
            
            return props.classNames;
        }
    }

    /**Если получен массив стилей, то вернуть тот, который
     * соответствует состоянию и контексту
     */
    function changeFieldStyle() {

        if (fileName){

            //Файл выбран
            return props.classNames[1];

        } else if (errors) {

            //Подсветка поля с ошибкой
            if (errors[props.name] && props.classNames[2] !== undefined) {

                return props.classNames[2];

            } else {
                //Нет стиля для подсветки поля с ошибкой
                return props.classNames[0];
            }

        } else {
            //Файл не выбран, ошибок нет
            return props.classNames[0];
        }
    }

    /**В начале ошибка валидации не показывается */
    function initErrors() {
        if (!errorRef.current) return;

        errorRef.current.style.opacity = 0;
    }

    /**Показать сообщение об ошибке валидации */
    function showError() {
        if (!errorRef.current) return;

        if (!errors) errorRef.current.style.opacity = 0;

        if (errors[props.name]) {
            
            if (props.error !== 'none') errorRef.current.style.opacity = 1;
            
            setErrorMessage(errors[props.name]);

        } else {
            errorRef.current.style.opacity = 0;
        }
    }

    return(
        <div className={container}>
            <input
                ref={inputRef}
                className={getFieldStyle()}
                value={fileName ? fileName : props.fieldName}
                type="text"
            />

            <input
            ref={fileRef}
                className={file}
                name={props.name}
                accept={props.accept}
                type="file"
                onChange={onChange}
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

export default File;

File.defaultProps = {
    error: <ErrorMessage.Default/>
};