import React, { useContext } from 'react';
import Button from '../buttons';
import MobileView from '../root-layout/view-context';
import Forms from '../../libs/react-components/forms-and-fields';
import ContactError from './contact-error-message';
import sendFeedbackForm from '../../send-form-callback/send-feedback-form';
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
    button} from './contact-feedback.module.css';

/**Окно "Обратная связь" страницы Контакты*/
function Feedback() {
    const mobileView = useContext(MobileView);

    //Имена полей формы
    const fieldNames = {
        initials : 'ФИО',
        email: 'e-mail',
        phone: 'Телефон',
        message: 'Ваше сообщение'
    };
    
    //Функции валидации
    const validate = {
        initials: (value) => Forms.Validate.notEmpty(value, fieldNames.initials),
        email: (value) => Forms.Validate.email(value, fieldNames.email),
        phone: (value) => Forms.Validate.notEmpty(value, fieldNames.phone),
        message: (value) => Forms.Validate.notEmpty(value, fieldNames.message)
    }        
    //Стили Input
    const inputInActiveStyle = [inputInActive, input].join(" ");
    const inputActiveStyle = [inputActive, input].join(" ");

    //Стили Textarea
    const textareaInActiveStyle = [textareaInActive, textarea].join(" ");
    const textareaActiveStyle = [textareaActive, textarea].join(" ");

    const inputClasses = [inputInActiveStyle, inputActiveStyle];
    const textareaClasses = [textareaInActiveStyle, textareaActiveStyle];

    return(
        <div className={feedback}>
            <div className={feedbackTitle}>Обратная связь</div>

            <Forms.Form
                className={form}
                validate={validate}
                onSubmit={sendFeedbackForm}
            >
                <Forms.Fields.Input
                    classNames={inputClasses}
                    name={'initials'}
                    fieldName={fieldNames.initials}
                    error={<ContactError/>}
                />
                <Forms.Fields.Input
                    classNames={inputClasses}
                    name={'email'}
                    fieldName={fieldNames.email}
                    error={<ContactError/>}
                />
                <Forms.Fields.Input
                    classNames={inputClasses}
                    name={'phone'}
                    fieldName={fieldNames.phone}
                    error={<ContactError/>}
                />
                <Forms.Fields.Textarea
                    classNames={textareaClasses}
                    name={'message'}
                    fieldName={fieldNames.message}
                    error={<ContactError/>}
                />

                <div className={agree}>
                    Отправляя форму, я даю согласие<br/>
                    на обработку персональных<br/>
                    данных.
                </div>

                <div className={button}>
                    {
                        mobileView ?
                        <Button.Send.Mobile/>
                        : <Button.Send.Desktop/>
                    }
                </div>
            </Forms.Form>
        </div>
    );
}

export default Feedback;