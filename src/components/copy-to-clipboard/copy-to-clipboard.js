import React, { useEffect, useState } from 'react';
import ModalMessages from '../modals-messages';
import Modals from '../../libs/react-components/modals';
import config from '../../config/config.json';

function CopyToClipboard(props) {
    const [isOpen, setOpen] = useState(false);

    useEffect(copy, [isOpen]);

    function openMessage() {
        setOpen(true);
    }

    function closeMessage() {
        setOpen(false);
    }

    function copy() {
        if (typeof window === undefined || !isOpen) return;

        navigator.clipboard.writeText(config.email).then(
            () => console.log('CopyToClipboard: copied')
        )
        .catch(err => {
                console.log('CopyToClipboard: Something went wrong', err);
            });
    }

    return(
        <div style={{cursor: 'pointer'}}>
            <Modals.Set
                isOpen={isOpen}
                closeModal={closeMessage}
                modal={<ModalMessages.AddressCopied/>}
            />

            <div onClick={openMessage}>
                {props.children}
            </div>
        </div>
    );
}

export default CopyToClipboard;