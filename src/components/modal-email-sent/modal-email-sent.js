import React from 'react';
import {container, cross, thank, text} from './modal-email-sent.module.css';
import close from '../../../static/images/cross-modal.svg';

function ModalEmailSent() {
    return(
        <div className={container}>
            <img data-close-modal className={cross} src={close} alt='close'/>
            
            <div className={text}>
                <span className={thank}>Спасибо!</span><br/>
                Наши специалисты получили ваше письмо! Совсем скоро мы свяжемся с вами.
            </div>
        </div>
    );
}

export default ModalEmailSent;