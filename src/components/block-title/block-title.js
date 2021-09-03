import React, {useState} from 'react';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';
import ModalContactProject from '../modal-contact-project';
import TitleDesktop from './block-title-desktop';
import TitleMobile from './block-title-mobile';

/**BlockTitle - титульный блок */
function BlockTitle() {
    const mobileView = useMediaQuery(config.app);

    /**Модальное окно Связаться */
    const [isOpen, setOpen] = useState(false);

    const [key, setKey] = useState(0);

    function openModal() {
        setKey(key + 1);
        setOpen(true);
    }
    
    if (mobileView === undefined) return null;

    return(
        <>
            {
                mobileView ?
                <TitleMobile openModal={openModal}/>
                : <TitleDesktop openModal={openModal}/>
            }

            <ModalContactProject
                key={key}
                isOpen={isOpen}
                closeModal={() => setOpen(false)}
                orderName='contact'
            />
        </>
    );
}

export default BlockTitle;