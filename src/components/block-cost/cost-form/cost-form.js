import React, { useContext, useRef, useState } from 'react';
import Buttons from '../../buttons';
import { form, input, attach, button, passportHide, passport, inputInActive, inputActive } from './cost-form.module.css';
import MobileView from '../../root-layout/view-context';
import Forms from '../../../libs/react-components/forms-and-fields';

const passportStyle = [attach, input, passport].join(" ");

const inputActiveStyle = [input, inputActive].join(" ");
const inputInActiveStyle = [input, inputInActive].join(" ");

const inputClasses = [inputInActiveStyle, inputActiveStyle];

function CostForm() {
    const mobileView = useContext(MobileView);

    const fieldNames = {
        inn: '*ИНН',
        fkko: '*ФККО',
        phone: '*+7 (909) 000 00 00',
        email: '*e-mail',
        passport:'Паспорт отходов'
    };

    return(
        <form className={form}>
            <Forms.Input classNames={inputClasses} name='inn' fieldName={fieldNames.inn}/>
            <Forms.Input classNames={inputClasses} name='fkko' fieldName={fieldNames.fkko}/>
            <Forms.Input classNames={inputClasses} name='phone' fieldName={fieldNames.phone}/>
            <Forms.Input classNames={inputClasses} name='email' fieldName={fieldNames.email}/>

            <label className={passportStyle}>{fieldNames.passport}
                <input className={passportHide} type="file"/>
            </label>

            <div className={button}>
                {
                    mobileView ? <Buttons.Send.Mobile/> : <Buttons.Send.Desktop/>
                }
            </div>
        </form>
    );
}

export default CostForm;