import React, {useState} from 'react';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import ModalContactProject from '../modal-contact-project';

/**BlockTitle - титульный блок */
function BlockTitle() {
    const mobileView = useMediaQuery(config.app);

    const TitleDesktop = React.lazy(() => import('./block-title-desktop'));
    const TitleMobile = React.lazy(() => import('./block-title-mobile'));

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
            <GatsbySuspense>
                {
                    mobileView ?
                    <TitleMobile openModal={openModal}/>
                    : <TitleDesktop openModal={openModal}/>
                }
            </GatsbySuspense>

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