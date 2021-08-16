import React, {useContext} from 'react';
import Forms from '../../libs/react-components/forms-and-fields';
import {form, title, container, cross, button} from './form-project-contact.module.css';
import { input, inputInActive, inputActive, inputError } from '../form-cost/form-cost.module.css';
import Buttons from '../buttons';
import MobileView from '../root-layout/view-context';
import close from '../../../static/images/cross-modal.svg';

function FormProjectContact(props) {
    const mobileView = useContext(MobileView);

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
        <div className={container}>
            <img data-close-modal className={cross} src={close} alt='close'/>

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