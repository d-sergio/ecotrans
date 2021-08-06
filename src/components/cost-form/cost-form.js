import React, { useContext} from 'react';
import Buttons from '../buttons';
import { form, input, attach, button, passport, inputInActive, inputActive, inputError } from './cost-form.module.css';
import MobileView from '../root-layout/view-context';
import Forms from '../../libs/react-components/forms-and-fields';
import sendCostForm from '../../send-form-callback/send-cost-form';
import checkFileSize from '../../libs/react-components/forms-and-fields/validate/file-size';

function CostForm() {
    const mobileView = useContext(MobileView);

    const formName = 'cost';
    const inputFileName = 'passport';
    const maxFileSize = 52428800; //bytes

    //Доступные для загрузки типы файлов
    const fileTypes = '.*';
    //Стиль File
    const passportInActiveStyle = [attach, input, inputInActive, passport].join(" ");
    const passportActiveStyle = [attach, input, inputActive, passport].join(" ");
    const passportErrorStyle = [attach, input, inputError, passport].join(" ");
    
    const passportClasses = [
        passportInActiveStyle,
        passportActiveStyle,
        passportErrorStyle
    ];

    //Стили Input
    const inputActiveStyle = [input, inputActive].join(" ");
    const inputInActiveStyle = [input, inputInActive].join(" ");
    const inputErrorStyle = [input, inputError].join(" ");
    const inputClasses = [
        inputInActiveStyle,
        inputActiveStyle,
        inputErrorStyle
    ];

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

    return(
        <Forms.Form
            className={form}
            validate={validate}
            onSubmit={sendCostForm}
            initialValues={initialValues}
            name={formName}
        >
            <Forms.Fields.Input
                classNames={inputClasses}
                name='inn'
                error='none'
            />

            <Forms.Fields.Input
                classNames={inputClasses}
                name='fkko'
                error='none'
            />

            <Forms.Fields.Input
                classNames={inputClasses}
                name='phone'
                error='none'
            />

            <Forms.Fields.Input
                classNames={inputClasses}
                name='email'
                error='none'
            />
            
            <Forms.Fields.File
                classNames={passportClasses}
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
    );
}

export default CostForm;