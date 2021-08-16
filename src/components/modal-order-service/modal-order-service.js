import React, { useEffect, useState } from 'react';
import Modals from '../../libs/react-components/modals';
import ModalMessages from '../modal-messages';
import FormOrderService from '../form-order-service';
import postServiceForm from '../../send-form-callback/post-service-form';

function ModalOrderService(props) {
    const [status, setStatus] = useState('order');
    const [formData, setFormData] = useState();
    const [modal, setModal] = useState(<FormOrderService formName={props.serviceName} setFormData={setFormData}/>);

    useEffect(() => {
        if (formData) {
            sendForm();
            setStatus('sending');
            setModal(<ModalMessages.EmailSending/>);
        }
    }, [formData]);

    /**Отправка формы */
    async function sendForm() {
        if (!formData) return;
        
        const result = await postServiceForm(formData, props.serviceName);

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
    
    return(
        <Modals.Set
            isOpen={props.isOpen}
            modal={modal}
            defaultClose={status === 'sending' ? false : true}
            closeModal={() => {
                setFormData(undefined);
                props.closeModal();
            }}
        />
    );
}

export default ModalOrderService;