import React from 'react';
import {container, cross, title, text} from './modal-messages-temp.module.css';
import close from '../../../../static/images/cross-modal.svg';

function ModalEcotransTemp(props) {
    return(
        <div className={container}>
            <img data-close-modal className={cross} src={close} alt='close'/>
            
            <div className={text}>
                <span className={title}>{props.title}</span><br/>
                {props.text}
            </div>
        </div>
    );
}

export default ModalEcotransTemp;