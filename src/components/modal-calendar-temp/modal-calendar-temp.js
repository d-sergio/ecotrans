import React, { useEffect, useRef, useState } from 'react';
import {outsideCloseIcon, insideCloseIcon, container, pictureAndText, gradient, image} from './modal-calendar-temp.module.css';
import Modal from '../../libs/react-components/modals';
import closeIcon from '../../../static/images/calendar/cross-calend-modal.svg';
import PictureAndText from '../../libs/react-components/picture-and-text';
import { mainContainer } from '../../common-styles/containers.module.css';

/**Шаблон модального окна для календаря (полноразмерная картинка с текстом)
 * 
 * Props:
 * @param {String} fullSizeImage - полноразмерная картинка из календаря для
 * модального окна. Адрес вида '/april/1.png'. Всё лежит в
 * '/static/images/calendar/fullsize/'
 * @param {Node | String} - текст, отображаемый поверх картинки
 */
function ModalCalendarTemp(props) {
    const mounted = useRef(true);
    /*const tryLoadCount = useRef(0);
    const maxLoadCounts = useRef(10);*/

    /**Меньше этой ширины окна картинка не открывается кликом,
     * так как уже занимает всю ширину
     */
    const openMinSize = 590;

    const [isOpen, setOpen] = useState(false);
    const [importedPicture, setPicture] = useState(null);
    
    useEffect(() => {
        return () => mounted.current = false;
    }, []);

    useEffect(openFullSizePic, [isOpen]);

    function openFullSizePic() {
        if (!isOpen || importedPicture) return;

        try{
            document.documentElement.style.transform = ''; /*Ростелеком */

            /**Предварительная загрузка картинки. Открывается на img.onload */
            const img = new Image();
            img.src = `${window.location.origin}/images/calendar/fullsize/${props.fullSizeImage}`;

            img.onload = () => {
                if (!mounted.current) return;

                setPicture(img.src);
            }
            
        } catch(e) {
            /**Защита для build */
        }
    }

    /**Динамический импорт картинки */
    /*function openFullSizePic() {
        if (importedPicture || !isOpen) return;

        import(`../../../static/images/calendar/fullsize/${props.fullSizeImage}`)
        .then( (data) => {
            if (!mounted.current) return;
            addData(data);
        } )
        .catch((e) => {
            console.log(`ModalCalendarTemp: ошибка импорта\n ${e.name}: ${e.message}\n ${e.stack}`);
            tryLoadCount.current += 1;

            if (tryLoadCount <= maxLoadCounts) openFullSizePic();
        });
    }*/

    /**Добавить импортированную картинку */
    /*function addData(data) {
        try{*/
            /**Предварительная загрузка картинки. Открывается на img.onload */
            /*const img = new Image();
            img.src = data.default || data;
            img.onload = () => setPicture(data.default || data);
        } catch(e) {
            console.log(`ModalCalendarTemp: не удалось загрузить картинку\n ${e.name}: ${e.message}\n ${e.stack}`);
        }

    }*/

    /**Контент модального окна с картинкой */
    const FullSizePic = () => (
        <div data-close-modal className={mainContainer} style={{position: 'relative'}}>
            <div className={container}>

                <div className={pictureAndText}>
                    {
                        importedPicture ?
                            <PictureAndText.Over
                                className={image}
                                image={importedPicture}
                                overlay={<div className={gradient}></div>}
                                text={props.text}
                            />
                            : null
                    }

                    <img
                        data-close-modal
                        className={insideCloseIcon}
                        src={closeIcon}
                        alt='close_icon'
                    />
                </div>

                <img
                    data-close-modal
                    className={outsideCloseIcon}
                    src={closeIcon}
                    alt='close_icon'
                />
                
            </div>
        </div>
    );

    return(
        <>
            <Modal.Set
                isOpen={isOpen && importedPicture ? true : false}
                closeModal={() => setOpen(false)}
                modal={<FullSizePic/>}
            />

            <div onClick={
                () => document.documentElement.clientWidth >= openMinSize ?
                    setOpen(true)
                    : null
                }>

                {props.children}
            </div>
        </>
    );
}

export default ModalCalendarTemp;