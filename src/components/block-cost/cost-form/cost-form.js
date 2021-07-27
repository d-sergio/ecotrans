import React, { useContext, useRef, useState } from 'react';
import Buttons from '../../buttons';
import { form, input, attach, button, passportHide, passport, inputInActive, inputActive } from './cost-form.module.css';
import MobileView from '../../root-layout/view-context';
import Forms from '../../../libs/react-components/forms-and-fields';
import CostError from './cost-error-message';

function CostForm() {
    const mobileView = useContext(MobileView);

    //Доступные для загрузки типы файлов
    const fileTypes = '.*';
    //Стиль для input type='file'
    const passportStyle = [attach, input, inputInActive, passport].join(" ");

    //Стили Input
    const inputActiveStyle = [input, inputActive].join(" ");
    const inputInActiveStyle = [input, inputInActive].join(" ");
    const inputClasses = [inputInActiveStyle, inputActiveStyle];

    /**Имена полей формы */
    const fieldNames = {
        inn: '*ИНН',
        fkko: '*ФККО',
        phone: '*+7 (909) 000 00 00',
        email: '*e-mail',
        passport:'Паспорт отходов'
    };

    //Функции валидации
    const validate = {
        inn: (value) => Forms.Validate.notEmpty(value, fieldNames.inn),
        fkko: (value) => Forms.Validate.notEmpty(value, fieldNames.fkko),
        phone: (value) => Forms.Validate.notEmpty(value, fieldNames.phone),
        email: (value) => Forms.Validate.email(value, fieldNames.email)
    };

    return(
        <Forms.Form
            className={form}
            validate={validate}
        >
            <Forms.Input
                classNames={inputClasses}
                name='inn'
                fieldName={fieldNames.inn}
                error={<CostError/>}
            />

            <Forms.Input
                classNames={inputClasses}
                name='fkko'
                fieldName={fieldNames.fkko}
                error={<CostError/>}
            />

            <Forms.Input
                classNames={inputClasses}
                name='phone'
                fieldName={fieldNames.phone}
                error={<CostError/>}
            />

            <Forms.Input
                classNames={inputClasses}
                name='email'
                fieldName={fieldNames.email}
                error={<CostError/>}
            />

            <label className={passportStyle}>{fieldNames.passport}
                <input accept={fileTypes} className={passportHide} type="file"/>
            </label>

            <div className={button}>
                {
                    mobileView ? <Buttons.Send.Mobile/> : <Buttons.Send.Desktop/>
                }
            </div>
        </Forms.Form>
    );
}

export default CostForm;