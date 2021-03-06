import React, { useState} from 'react';
import ButtonSend from '../buttons/button-send/button-send';
import { form, input, attach, button, passport, inputInActive, inputActive, inputError } from './form-cost.module.css';
import Forms from '../../libs/react-components/forms-and-fields';
import ModalRequestCost from '../modal-request-cost';
import config from '../../config/config.json';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import configMedia from '../../config/config-media-queries.json';

function CostForm() {
    const mobileView = useMediaQuery(configMedia.app);

    //Если форма отпралена, то будет показано модальное окно
    const [modalIsOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState();
    //Ключ нужен для сброса состояния модального окна при каждом его вызове
    const [key, setKey] = useState(0);

    const formName = 'cost';
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
        <>
            <Forms.Form
                className={form}
                validate={validate}
                onSubmit={(data) => {
                        setFormData(data);
                        setKey(key + 1);
                        setModalOpen(true);
                    }
                }
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
                    <ButtonSend mobile={mobileView}/>
                </div>

            </Forms.Form>

            <ModalRequestCost
                key={key}
                isOpen={modalIsOpen ? true : false}
                formData={modalIsOpen ? formData : undefined}
                closeModal={() => setModalOpen(false)}
            />
        </>
    );
}

export default CostForm;