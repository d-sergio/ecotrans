import React from 'react';
import Forms from '../../libs/react-components/forms-and-fields';
import { form, title, container, cross, button } from '../../common-styles/modals.module.css';
import { projectContactContainer } from './form-project-contact.module.css';
import { input, inputInActive, inputActive, inputError } from '../form-cost/form-cost.module.css';
import Buttons from '../buttons';
import close from '../../../static/images/cross-modal.svg';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';

function FormProjectContact(props) {
    const containerStyle = [projectContactContainer, container].join(" ");

    const mobileView = useMediaQuery(config.app);

    //Уникальное имя формы
    const formName = props.formName + 'order';

    //Имена полей формы
    const initialValues = {
        initials : 'ФИО',
        email: 'e-mail',
        phone: 'Телефон',
    };
    
    //Функции валидации
    const validate = {
        initials: (value) => Forms.Validate.notEmpty(value, initialValues.initials),
        email: (value) => Forms.Validate.email(value, initialValues.email),
        phone: (value) => Forms.Validate.notEmpty(value, initialValues.phone)
    }        

    //Стили Input
    const inputActiveStyle = [input, inputActive].join(" ");
    const inputInActiveStyle = [input, inputInActive].join(" ");
    const inputErrorStyle = [input, inputError].join(" ");
    
    const inputClasses = {
        inactive: inputInActiveStyle,
        active: inputActiveStyle,
        error: inputErrorStyle
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
                    name={'initials'}
                />
                <Forms.Fields.Input
                    className={inputClasses}
                    name={'phone'}
                />
                <Forms.Fields.Input
                    className={inputClasses}
                    name={'email'}
                />

                <div className={button}>
                    {
                        mobileView ?
                            <Buttons.Send.Mobile/>
                            : <Buttons.Send.Desktop/>
                    }
                </div>
            </Forms.Form>
        </div>
    );
}

export default FormProjectContact;