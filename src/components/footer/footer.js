import React, {useState, useEffect} from 'react';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import configMedia from '../../config/config-media-queries.json';
import config from '../../config/config.json';
import Modals from '../../libs/react-components/modals';
import ModalMessages from '../modal-messages';
import FooterDesktop from './footer-desktop';
import FooterMobile from './footer-mobile';

/**Управление модальными окнами футреа происходит из этого компонента, так
 * как переход между FooterMobile и FooterDesktop при открытом модальном
 * окне приведёт к размонтированию модального окна при заблокированной
 * прокрутке страницы
 */
function Footer() {

    /**Копировать email в буфер обмена
     * navigator.clipboard поддерживается только для HTTPS! Поэтому на HTTP ничего
     * не произойдёт
    */
    const [copyIsOpen, setCopy] = useState(false);

    useEffect(copy, [copyIsOpen]);

    function openCopy() {
        if (!navigator.clipboard) return;

        setCopy(true);
    }

    function closeCopy() {
        setCopy(false);
    }

    function copy() {
        if (typeof window === undefined || !copyIsOpen || !navigator.clipboard) return;

        navigator.clipboard.writeText(config.email).then(
            () => console.log('CopyToClipboard: copied')
        )
        .catch(err => {
                console.log('CopyToClipboard: Something went wrong', err);
            });
    }

    /**Модальное окно WeWrite*/

    const [weWriteIsOpen, setWeWrite] = useState(false);
    
    function openWeWrite() {
        setWeWrite(true);
    }

    function closeWeWrite() {
        setWeWrite(false);
    }

    const mobileView = useMediaQuery(configMedia.footer);

    if (mobileView === undefined) return null;
    
    return (
        <>
            {
                mobileView ?
                <FooterMobile openCopy={openCopy} openWeWrite={openWeWrite}/>
                : <FooterDesktop openCopy={openCopy} openWeWrite={openWeWrite}/>
            }

            <Modals.Set
                isOpen={copyIsOpen}
                closeModal={closeCopy}
                modal={<ModalMessages.AddressCopied/>}
            />

            <Modals.Set
                isOpen={weWriteIsOpen}
                closeModal={closeWeWrite}
                modal={<ModalMessages.WeWrite/>}
            />
        </>
    );
}

export default Footer;