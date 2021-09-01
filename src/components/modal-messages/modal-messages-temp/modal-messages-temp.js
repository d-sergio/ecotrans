import React from 'react';
import {container, cross, title, text, br} from './modal-messages-temp.module.css';
import close from '../../../../static/images/cross-modal.svg';

/**Props:
 * @param {boolean} withCross - можно ли закрыть окно
 */
function ModalEcotransTemp(props) {
    const display = props.withCross ? 'inherit' : 'none';

    return(
        <div className={container}>
            <div data-close-modal style={{display: display}} className={cross}>
                <img data-close-modal src={close} alt='close'/>
            </div>
            
            <div className={text}>
                <span className={title}>
                    {props.title}
                </span>
                
                <br className={br}/>

                {props.text}
            </div>
        </div>
    );
}

export default ModalEcotransTemp;

ModalEcotransTemp.defaultProps = {
    withCross: true
};