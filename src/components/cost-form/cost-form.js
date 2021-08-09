import React, { useContext, useState} from 'react';
import Buttons from '../buttons';
import { form, input, attach, button, passport, inputInActive, inputActive, inputError } from './cost-form.module.css';
import MobileView from '../root-layout/view-context';
import Forms from '../../libs/react-components/forms-and-fields';
import sendCostForm from '../../send-form-callback/send-cost-form';
import ModalEmailSent from '../modal-email-sent';
import Modal from '../../libs/react-components/modals';

function CostForm() {
    const mobileView = useContext(MobileView);

    //Если форма отпралена, то будет показано модальное окно
    const [isSubmitting, setSubmitting] = useState(false);

    const formName = 'cost';
    const inputFileName = 'passport';
    const maxFileSize = 52428800; //bytes

    //Доступные для загрузки типы файлов
    const fileTypes = '.*';
    //Стиль File
    const passportInActiveStyle = [attach, input, inputInActive, passport].join(" ");
    const passportActiveStyle = [attach, input, inputActive, passport].join(" ");
    const passportErrorStyle = [attach, input, inputError, passport].join(" ");
    
    const passportClasses = {
        inactive: passportInActiveStyle,
        active: passportActiveStyle,
        error: passportErrorStyle
    };

    //Стили Input
    const inputActiveStyle = [input, inputActive].join(" ");
    const inputInActiveStyle = [input, inputInActive].join(" ");
    const inputErrorStyle = [input, inputError].join(" ");
    const inputClasses = {
        inactive: inputInActiveStyle,
        active: inputActiveStyle,
        error: inputErrorStyle
    };

    /**Имена полей формы */
    const initialValues = {
        inn: '*ИНН',
        fkko: '*ФККО',
        phone: '*+7 (909) 000 00 00',
        email: '*e-mail',
        passport: `Паспорт отходов (не более ${maxFileSize / 1048576}Мб)`
    };

    //Функции валидации
    const validate = {
        inn: (value) => Forms.Validate.notEmpty(value, initialValues.inn),
        fkko: (value) => Forms.Validate.notEmpty(value, initialValues.fkko),
        phone: (value) => Forms.Validate.notEmpty(value, initialValues.phone),
        email: (value) => Forms.Validate.email(value, initialValues.email),
        passport: () => Forms.Validate.fileSize(formName, inputFileName, maxFileSize)
    };

    /**Отправка формы */
    async function sendForm(formData) {
        const result = await sendCostForm(formData);

        if (result) {
            console.log(`Ответ сервера: ${result.message}`);

            if (result.message === 'done') return;
        }
    }

    return(
        <>
            <Forms.Form
                className={form}
                validate={validate}
                onSubmit={sendForm}
                initialValues={initialValues}
                name={formName}
            >
                <Forms.Fields.Input
                    className={inputClasses}
                    name='inn'
                    error='none'
                />

                <Forms.Fields.Input
                    className={inputClasses}
                    name='fkko'
                    error='none'
                />

                <Forms.Fields.Input
                    className={inputClasses}
                    name='phone'
                    error='none'
                />

                <Forms.Fields.Input
                    className={inputClasses}
                    name='email'
                    error='none'
                />
                
                <Forms.Fields.File
                    className={passportClasses}
                    name={inputFileName}
                    accept={fileTypes}
                    error='none'
                />

                <div className={button}>
                    {
                        mobileView ? <Buttons.Send.Mobile/> : <Buttons.Send.Desktop/>
                    }
                </div>

            </Forms.Form>

            <Modal.Open
                isOpen={isSubmitting}
                modal={<ModalEmailSent/>}
                closeModal={() => setSubmitting(false)}
            />
        </>
    );
}

export default CostForm;