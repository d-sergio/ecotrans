import React from 'react';
import {container} from './contact-error-message.module.css';

function ContactError(props) {
    return(
        <div className={container}>{props.children}</div>
    );
}

export default ContactError;