import React from 'react';
import Forms from '../../libs/react-components/forms-and-fields';
import { input, attach, passport, inputInActive, inputActive, inputError } from '../form-cost/form-cost.module.css';
import { form, title, container, cross, button } from '../../common-styles/modals.module.css';
import { orderServiceContainer } from './form-order-service.module.css';
import config from '../../config/config.json';
import Buttons from '../buttons';
import close from '../../../static/images/cross-modal.svg';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import configMedia from '../../config/config-media-queries.json';

function FormOrderService(props) {
    const containerStyle = [orderServiceContainer, container].join(" ");

    const mobileView = useMediaQuery(configMedia.app);

    //Уникальное имя формы
    const formName = props.formName + 'order';
    
    const inputFileName = 'passport';
    const maxFileSize = config.costForm.fileSize; //bytes

    //Доступные для загрузки типы файлов
    const fileTypes = config.costForm.fileType;
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
        passport: `Паспорт отходов (до ${maxFileSize / 1048576}Мб)`
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
        <div className={containerStyle}>
            <div data-close-modal className={cross}>
                <img data-close-modal src={close} alt='close'/>
            </div>

            <div className={title}>Заполните эту форму</div>

            <Forms.Form
                className={form}
                validate={validate}
                onSubmit={ props.setFormData }
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
        </div>
    );
}

export default FormOrderService;