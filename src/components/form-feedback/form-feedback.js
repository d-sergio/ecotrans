import React, { useEffect, useState } from 'react';
import ButtonSend from '../buttons/button-send/button-send';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';
import Forms from '../../libs/react-components/forms-and-fields';
import ContactError from './contact-error-message';
import ModalRequestFeedback from '../modal-request-feedback /modal-request-feedback';
import {
    feedback,
    feedbackTitle,
    form,
    textareaActive,
    textareaInActive,
    input,
    inputActive,
    inputInActive,
    agree,
    textarea,
    button} from './form-feedback.module.css';

/**Окно "Обратная связь" страницы Контакты*/
function Feedback(props) {
    const mobileView = useMediaQuery(config.app);

    //Если форма отпралена, то будет показано модальное окно
    const [modalIsOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState();
    //Ключ нужен для сброса состояния модального окна при каждом его вызове
    const [key, setKey] = useState(0);

    useEffect(setFeedbackZindex, [modalIsOpen]);

    /*Модальное окно отправки формы обратной связи вложено в компонент
    Feedback. Соседний компонент Address перекрывает это модальное окно.
    Посколько Address тоже имеет своё модальное окно, то простой установкой
    z-index не обойтись, так как кто-то всегда будет перекрывать соседа.
    Реф обёртки Feedback передаётся самому Feedback. Когда он открывает
    модальное окно, то повышает свой z-index. А при закрытии возвращает
    прежнее значение*/
    function setFeedbackZindex() {
        if (!props.feedbackRef.current) return;

        if (modalIsOpen) {
            props.feedbackRef.current.style.zIndex = '503';
        } else {
            //Задержка для анимации закрытия модального окна
            setTimeout(() => {
                props.feedbackRef.current.style.zIndex = '501';
            }, 500);
        }
    }

    //Имена полей формы
    const initialValues = {
        initials : 'ФИО',
        email: 'e-mail',
        phone: 'Телефон',
        message: 'Ваше сообщение'
    };
    
    //Функции валидации
    const validate = {
        initials: (value) => Forms.Validate.notEmpty(value, initialValues.initials),
        email: (value) => Forms.Validate.email(value, initialValues.email),
        phone: (value) => Forms.Validate.notEmpty(value, initialValues.phone),
        message: (value) => Forms.Validate.notEmpty(value, initialValues.message)
    }        
    //Стили Input
    const inputInActiveStyle = [inputInActive, input].join(" ");
    const inputActiveStyle = [inputActive, input].join(" ");

    //Стили Textarea
    const textareaInActiveStyle = [textareaInActive, textarea].join(" ");
    const textareaActiveStyle = [textareaActive, textarea].join(" ");

    const inputClasses = {
        inactive: inputInActiveStyle,
        active: inputActiveStyle,
        error: inputActiveStyle
    };
    
    const textareaClasses = {
        inactive: textareaInActiveStyle,
        active: textareaActiveStyle,
        error: textareaActiveStyle
    };

    return(
        <div className={feedback}>
            <div className={feedbackTitle}>Обратная связь</div>

            <Forms.Form
                className={form}
                validate={validate}
                onSubmit={(data) => {
                        setFormData(data);
                        setKey(key + 1);
                        setModalOpen(true);
                    }
                }
                initialValues = {initialValues}
            >
                <Forms.Fields.Input
                    className={inputClasses}
                    name={'initials'}
                    error={<ContactError/>}
                />
                <Forms.Fields.Input
                    className={inputClasses}
                    name={'email'}
                    error={<ContactError/>}
                />
                <Forms.Fields.Input
                    className={inputClasses}
                    name={'phone'}
                    error={<ContactError/>}
                />
                <Forms.Fields.Textarea
                    className={textareaClasses}
                    name={'message'}
                    error={<ContactError/>}
                />

                <div className={agree}>
                    Отправляя форму, я даю согласие<br/>
                    на обработку персональных<br/>
                    данных.
                </div>

                <div className={button}>
                        <ButtonSend mobile={mobileView}/>
                </div>
            </Forms.Form>

            <ModalRequestFeedback
                key={key}
                isOpen={modalIsOpen ? true : false}
                formData={modalIsOpen ? formData : undefined}
                closeModal={() => setModalOpen(false)}
            />
        </div>
    );
}

export default Feedback;