import React, { useContext, useRef, useState } from 'react';
import Buttons from '../../buttons';
import { form, input, attach, button, passportHide } from './cost-form.module.css';
import MobileView from '../../root-layout/view-context';
import checkEmail from '../../../libs/check-email';

const passport = [attach, input].join(" ");

function CostForm() {
    const mobileView = useContext(MobileView);

    const defaultValue = {
        inn: '*ИНН',
        fkko: '*ФККО',
        phone: '*+7 (909) 000 00 00',
        email: '*e-mail',
        passport:'Паспорт отходов'
    };

    const [innState, setInnState] = useState(defaultValue.inn);
    const [fkkoState, setFkkoState] = useState(defaultValue.fkko);
    const [phoneState, setPhoneState] = useState(defaultValue.phone);
    const [emailState, setEmailState] = useState(defaultValue.email);
    const [passportState, setPassportState] = useState(defaultValue.passport);

    const innRef = useRef(null);
    const fkkoRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const passportRef = useRef(null);

    function onFocus(element) {
        const ref = getRef(element);

        if (ref.current) ref.current.style.color = '#3D3D3D';

        switch(element) {
            case 'inn':
                if (innState === defaultValue.inn) setInnState('');
                break;
            case 'fkko':
                if (fkkoState === defaultValue.fkko) setFkkoState('');
                break;
            case 'phone':
                if (phoneState === defaultValue.phone) setPhoneState('');
                break;
            case 'email':
                if (emailState === defaultValue.email) setEmailState('');
                break;
            case 'passport':
                if (passportState === defaultValue.passport) setPassportState('');
                break;
            default: console.log ('CostForm. onFocus: нет такого поля');
        }
    }

    function onBlur(element) {
        const ref = getRef(element);

        if (ref.current) {
            if (ref.current.value === '' || ref.current.value === defaultValue[element]) {
                ref.current.style.color = '#ABABAB';
            }
        }

        switch(element) {
            case 'inn':
                if (innState === '') setInnState(defaultValue.inn);
                break;
            case 'fkko':
                if (fkkoState === '') setFkkoState(defaultValue.fkko);
                break;
            case 'phone':
                if (phoneState === '') setPhoneState(defaultValue.phone);
                break;
            case 'email':
                if (emailState === '') setEmailState(defaultValue.email);
                break;
            case 'passport':
                if (passportState === '') setPassportState(defaultValue.passport);
                break;
            default: console.log ('CostForm. onBlur: нет такого поля');
        }
    }

    function onChange(e, element) {
        switch(element) {
            case 'inn':
                console.log(`!!!`);
                setInnState(e.target.value);
                break;
            case 'fkko':
                setFkkoState(e.target.value);
                break;
            case 'phone':
                setPhoneState(e.target.value);
                break;
            case 'email':
                setEmailState(e.target.value);
                break;
            case 'passport':
                setPassportState(e.target.value);
                break;
            default: console.log ('CostForm. onChange: нет такого поля');
        }
    }

    function onSubmit(e) {
        e.preventDefault();

        const refsExist = checkRefs();
        if (!refsExist) return;

        const emailIsCorrect = checkEmail(emailRef.current.value);

        if (!emailIsCorrect) {
            return alert('Некорректный email!');
        }
    }

    function getRef(ref) {
        switch(ref) {
            case 'inn':
                if (innRef) return innRef;
                break;
            case 'fkko':
                if (fkkoRef) return fkkoRef;
                break;
            case 'phone':
                if (phoneRef) return phoneRef;
                break;
            case 'email':
                if (emailRef) return emailRef;
                break;
            case 'passport':
                if (passportRef) return passportRef;
                break;
            default:
                console.log('CostForm. getRef: Неправильный ref');
        }
    }

    function checkRefs() {
        if (!innRef
            || !fkkoRef
            || !phoneRef
            || !emailRef
            || !passportRef
        ) return false;

        if (!innRef.current
            || !fkkoRef.current
            || !phoneRef.current
            || !emailRef.current
            || !passportRef.current
        ) return false;

        return true;
    }

    return(
        <form className={form} onSubmit={onSubmit}>
            <input ref={innRef} className={input} type="text" value={innState}
            onFocus={() => onFocus('inn')} onBlur={() => onBlur('inn')}
            onChange={(e) => onChange(e, 'inn')}/>

            <input ref={fkkoRef} className={input} type="text" value={fkkoState}
            onFocus={() => onFocus('fkko')} onBlur={() => onBlur('fkko')}
            onChange={(e) => onChange(e, 'fkko')}/>

            <input ref={phoneRef} className={input} type="text" value={phoneState}
            onFocus={() => onFocus('phone')} onBlur={() => onBlur('phone')}
            onChange={(e) => onChange(e, 'phone')}/>

            <input ref={emailRef} className={input} type="text" value={emailState}
            onFocus={() => onFocus('email')} onBlur={() => onBlur('email')}
            onChange={(e) => onChange(e, 'email')}/>

            <label className={passport}>
                <input ref={passportRef} className={passportHide} type="file" 
                onFocus={() => onFocus('passport')} onBlur={() => onBlur('passport')}
                onChange={(e) => onChange(e, 'passport')}/>
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