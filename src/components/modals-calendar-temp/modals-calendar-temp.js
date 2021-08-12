import React, { useEffect, useRef, useState } from 'react';
import {outsideCloseIcon, insideCloseIcon, container, pictureAndText, gradient, image} from './modals-calendar-temp.module.css';
import Modal from '../../libs/react-components/modals';
import closeIcon from '../../../static/images/calendar/cross-calend-modal.svg';
import PictureAndText from '../../libs/react-components/picture-and-text';
import { mainContainer } from '../../common-styles/containers.module.css';
import dummy from '../../../static/images/calendar/calendar-dummy.svg';

/**Шаблон модального окна для календаря (полноразмерная картинка с текстом)
 * 
 * Props:
 * @param {String} fullSizeImage - полноразмерная картинка из календаря для
 * модального окна. Адрес вида '/april/1.png'. Всё лежит в
 * '/static/images/calendar/fullsize/'
 * @param {Node | String} - текст, отображаемый поверх картинки
 */
function ModalCalendarTemp(props) {
    //const mounted = useRef(true);

    /**Меньше этой ширины окна картинка не открывается кликом,
     * так как уже занимает всю ширину
     */
    const openMinSize = 590;

    const [isOpen, setOpen] = useState(false);
    const [importedPicture, setPicture] = useState(null);
    
    /*useEffect(() => {
        return () => mounted.current = false;
    }, []);*/

    useEffect(openFullSizePic, [isOpen]);

    /**Динамический импорт картинки */
    function openFullSizePic() {
        if (importedPicture || !isOpen) return;

        import(`../../../static/images/calendar/fullsize/${props.fullSizeImage}`)
        .then( (data) => addData(data) )
        .catch((e) => console.log(`ModalCalendarTemp: ошибка импорта\n ${e.name}: ${e.message}\n ${e.stack}`));
    }

    /**Добавить импортированную картинку */
    function addData(data) {
        /*if (!mounted.current) {
            console.log('ModalCalendarTemp: компонент размонтирован, импорт картинки прерван');

            return;
        }*/

        try{
            /**Предварительная загрузка картинки. Открывается на img.onload */
            const img = new Image();
            img.src = data.default || data;
            /*img.onload = () => mounted.current ? setPicture(data.default || data) : null;*/
            img.onload = () => setPicture(data.default || data);
        } catch(e) {
            console.log(`ModalCalendarTemp: не удалось загрузить картинку\n ${e.name}: ${e.message}\n ${e.stack}`);
        }

    }

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