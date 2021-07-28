import React, { useContext, useRef, useState } from 'react';
import Buttons from '../../buttons';
import { form, input, attach, button, passport, inputInActive, inputActive, inputError } from './cost-form.module.css';
import MobileView from '../../root-layout/view-context';
import Forms from '../../../libs/react-components/forms-and-fields';
import CostError from './cost-error-message';

function CostForm() {
    const mobileView = useContext(MobileView);

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
    const fieldNames = {
        inn: '*ИНН',
        fkko: '*ФККО',
        phone: '*+7 (909) 000 00 00',
        email: '*e-mail',
        passport: 'Паспорт отходов'
    };

    //Функции валидации
    const validate = {
        inn: (value) => Forms.Validate.notEmpty(value, fieldNames.inn),
        fkko: (value) => Forms.Validate.notEmpty(value, fieldNames.fkko),
        phone: (value) => Forms.Validate.notEmpty(value, fieldNames.phone),
        email: (value) => Forms.Validate.email(value, fieldNames.email),
        passport: (value) => Forms.Validate.notEmpty(value, fieldNames.phone)
    };

    return(
        <Forms.Form
            className={form}
            validate={validate}
        >
            <Forms.Fields.Input
                classNames={inputClasses}
                name='inn'
                fieldName={fieldNames.inn}
                error='none'
            />

            <Forms.Fields.Input
                classNames={inputClasses}
                name='fkko'
                fieldName={fieldNames.fkko}
                error='none'
            />

            <Forms.Fields.Input
                classNames={inputClasses}
                name='phone'
                fieldName={fieldNames.phone}
                error='none'
            />

            <Forms.Fields.Input
                classNames={inputClasses}
                name='email'
                fieldName={fieldNames.email}
                error='none'
            />
            
            <Forms.Fields.File
                classNames={passportClasses}
                name='passport'
                fieldName={fieldNames.passport}
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