import React, { useContext, useState } from 'react';
import Button from '../buttons';
import MobileView from '../root-layout/view-context';
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
function Feedback() {
    const mobileView = useContext(MobileView);

    //Если форма отпралена, то будет показано модальное окно
    const [modalIsOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState();    

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
                    {
                        mobileView ?
                        <Button.Send.Mobile/>
                        : <Button.Send.Desktop/>
                    }
                </div>
            </Forms.Form>

            <ModalRequestFeedback
                key={modalIsOpen}
                isOpen={modalIsOpen ? true : false}
                formData={modalIsOpen ? formData : undefined}
                closeModal={() => setModalOpen(false)}
            />
        </div>
    );
}

export default Feedback;