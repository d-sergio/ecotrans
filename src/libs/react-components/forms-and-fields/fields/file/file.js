import React, { useRef, useState, useEffect, useContext } from 'react';
import {container, file, errorStyle} from './file.module.css';
import Errors from '../../context/errors';
import Values from '../../context/values';
import ErrorMessage from '../../error-message';
import getClassNames from '../common/get-class-names';

/**Поле загрузки файлов
 * 
 * Props:
 * 
 * @param {string | object} className - className объект стилей CSS.
 * inactive - стиль неактивного поля
 * active - стиль активного поля
 * error - стиль поля с ошибкой
 * 
 * Также можно передать один стиль без объекта.
 *
 * Также можно передать один стиль без массива.
 * 
 * @param {string} name - имя поля для формы
 * @param {string} accept - типы файлов, доступные для загрузки
 * Например 'image/jpeg,image/png'. Так же, как с обычным <input type="file"/>
 * @param {node} error - элемент, в который будет помещено сообщение об ошибке
 * валидации. По умолчанию используется <ErrorMessage.Default/>
 * Значение error='none' указывает, что текст ошибки пользователью не показывается.
 * 
 * Context:
 * Values - объект, в поле values[props.name] которого хранится значение для текущего
 * компонента Field. Компонент рассматривает его как название, которое увидит
 * пользователь прямо в поле ввода текста. Название будет скрываться при фокусировке
 * на компоненте
 * 
 * Errors - объект, в поле errors[props.name] которого хранится текст сообщения об
 * ошибке валидации
*/
function File(props) {
    const inputRef = useRef(null);
    const fileRef = useRef(null);
    const errorRef = useRef(false);

    const [fileName, setFileName] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const errors = useContext(Errors);
    const values = useContext(Values);

    useEffect(() => initFieldStyle(), []);
    useEffect(() => initErrors(), []);
    useEffect(() => {
        if (errors !== undefined) showError();
    }, [errors]);

    /**Показать название файла */
    function onChange() {
        if (!fileRef.current || !fileRef.current.value) return;

        setActiveField();

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

    /**Стиль неактивного поля */
    function initFieldStyle() {
        if (!inputRef.current) return;
            
        inputRef.current.className = getClassNames(props.className).inactive;
    }

    /**Активный вид поля*/
    function setActiveField() {  

        if (inputRef.current) {

            inputRef.current.className = getClassNames(props.className).active;
        }
    }

    /**Применить к полю стиль, соответствующий ошибке, если такой стиль
     * получен из пропс
    */
    function setErrorStyle() {
        if (errors) {

            //Подсветка поля с ошибкой
            if (errors[props.name]) {

                return getClassNames(props.className).error;

            }
        }
    }

    /**В начале ошибка валидации не показывается */
    function initErrors() {
        if (!errorRef.current) return;

        errorRef.current.style.opacity = 0;
    }

    /**Показать сообщение об ошибке валидации
     * Подсветить поле соответствующим стилем
    */
    function showError() {
        if (!inputRef.current) return;

        if (errors[props.name]) {
            
            if (inputRef.current) inputRef.current.className = setErrorStyle();

            if (props.error !== 'none') errorRef.current.style.opacity = 1;

            setErrorMessage(errors[props.name]);

        } else {
            errorRef.current.style.opacity = 0;
        }
    }

    return(
        <div className={container}>
            <input
                readOnly
                ref={inputRef}
                className={getClassNames(props.className).inactive}
                value={fileName ? fileName : values[props.name]}
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