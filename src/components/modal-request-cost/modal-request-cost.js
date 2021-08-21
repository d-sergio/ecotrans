import React, { useEffect, useState } from 'react';
import postServiceForm from '../../send-form-callback/post-service-form';
import Modals from '../../libs/react-components/modals';
import ModalMessages from '../modal-messages';

function ModalRequestCost(props) {
    const [modal, setModal] = useState(<ModalMessages.EmailSending/>);
    const [status, setStatus] = useState('sending');
    
    const reasonName = 'Уточнение стоимости';

    useEffect(sendForm, [props.formData]);

    /**Отправка формы */
    async function sendForm() {
        if (!props.formData) return;
        
        const result = await postServiceForm(props.formData, reasonName);

        if (result) {
            console.log(`Ответ сервера: ${result.message}`);

            if (result.message === 'done') {
                setModal(<ModalMessages.EmailSent/>);
                setStatus('sent');

                return;

            } else if (result.message === 'error') {
                setModal(<ModalMessages.EmailError/>);
                setStatus('error');

                return;
            }
        }

        setModal(<ModalMessages.EmailError/>);
        setStatus('error');
        return;
    }

    return (
        <Modals.Set
            isOpen={props.isOpen}
            modal={modal}
            closeModal={props.closeModal}
            defaultClose={status === 'sending' ? false : true}
        />
    );
}

export default ModalRequestCost;