import React, { useContext } from 'react';
import Button from '../buttons';
import MobileView from '../root-layout/view-context';
import Forms from '../../libs/react-components/forms-and-fields';
import ContactError from './contact-error-message';
import checkEmail from '../../libs/check-email';
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
    button,
    error} from './contact-feedback.module.css';

//Имена полей формы
const fieldNames = {
    initials : 'ФИО',
    email: 'e-mail',
    phone: 'Телефон'
};

/**Окно "Обратная связь" страницы Контакты*/
function Feedback() {
    const messageDefault = 'Ваше сообщение';
    
    const validate = {
        initials: validateInitials,
        email: validateEmail,
        phone: validatePhone,
        message: validateMessage,
    }    

    const mobileView = useContext(MobileView);
    
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
            >
                    <Forms.Input
                        classNames={inputClasses}
                        name={'initials'}
                        fieldName={fieldNames.initials}
                        error={<ContactError/>}
                    />
                    <Forms.Input
                        classNames={inputClasses}
                        name={'email'}
                        fieldName={fieldNames.email}
                        error={<ContactError/>}
                    />
                    <Forms.Input
                        classNames={inputClasses}
                        name={'phone'}
                        fieldName={fieldNames.phone}
                        error={<ContactError/>}
                    />
                    <Forms.Textarea
                        classNames={textareaClasses}
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
        </div>
    );
}

export default Feedback;

function validateEmail(email) {
    if (email === '' || email === fieldNames.email) {
        
        return '*Обязательное поле';

    } else if (!checkEmail(email))  {

        return 'Некорректный email';
    }
}

function validateInitials(value) {
    if (value === fieldNames.initials || value === '') {
        return '*Обязательное поле';
    }
}

function validatePhone(value) {
    if (value === fieldNames.phone || value === '') {
        return '*Обязательное поле';
    }
}

function validateMessage(value) {
    if (value === '') {
        return '*Обязательное поле';
    }
}