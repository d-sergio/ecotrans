import React, {useContext} from 'react';
import ViewContext from "../../root-layout/view-context";
import {style} from './button-contact.module.css';

const ButtonContact = () => {
    const view = useContext(ViewContext);

    const buttonText = view === 'mobile' ? 'Связаться' : 'Связаться с нами';
    
    return <button className={style}>{buttonText}</button>;
};

export default ButtonContact;