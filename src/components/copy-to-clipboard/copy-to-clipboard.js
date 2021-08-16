import React, { useEffect, useState } from 'react';
import ModalMessages from '../modal-messages';
import Modals from '../../libs/react-components/modals';
import config from '../../config/config.json';

/**navigator.clipboard поддерживается только для HTTPS! Поэтому на HTTP ничего
 * не произойдёт
*/
function CopyToClipboard(props) {
    const [isOpen, setOpen] = useState(false);

    useEffect(copy, [isOpen]);

    function openMessage() {
        if (!navigator.clipboard) return;

        setOpen(true);
    }

    function closeMessage() {
        setOpen(false);
    }

    function copy() {
        if (typeof window === undefined || !isOpen || !navigator.clipboard) return;

        navigator.clipboard.writeText(config.email).then(
            () => console.log('CopyToClipboard: copied')
        )
        .catch(err => {
                console.log('CopyToClipboard: Something went wrong', err);
            });
    }

    return(
        <>
            <Modals.Set
                isOpen={isOpen}
                closeModal={closeMessage}
                modal={<ModalMessages.AddressCopied/>}
            />

            <div style={{cursor: 'pointer'}} onClick={openMessage}>
                {props.children}
            </div>
        </>
    );
}

export default CopyToClipboard;