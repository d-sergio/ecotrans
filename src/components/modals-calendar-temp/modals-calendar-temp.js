import React, { useEffect, useRef, useState } from 'react';
import {backgroundCloseIcon, container, textAndBorder} from './modals-calendar-temp.module.css';
import Modal from '../../libs/react-components/modals';
import closeIcon from '../../../static/images/calendar/cross-calend-modal.svg';
import PictureAndText from '../../libs/react-components/picture-and-text';
import { mainContainer } from '../../common-styles/containers.module.css';
import dummy from '../../../static/images/calendar-dummy.svg';

/**Шаблон модального окна для календаря (полноразмерная картинка с текстом)
 * 
 * Props:
 * @param {String} fullSizeImage - полноразмерная картинка из календаря для
 * модального окна. Адрес вида '/april/1.png'. Всё лежит в
 * '/static/images/calendar/fullsize/'
 * @param {Node} dummy - заглушка, которую видит пользователь, пока картинка
 * не загрузилась
 * @param {Node | String} - текст, отображаемый поверх картинки
 */
function ModalCalendarTemp(props) {
    const mounted = useRef(true);

    const [isOpen, setOpen] = useState(false);
    const [importedPicture, setPicture] = useState(null);
    
    useEffect(() => {
        return () => mounted.current = false;
    }, []);

    useEffect(openFullSizePic, [isOpen]);

    function openFullSizePic() {
        if (importedPicture || !isOpen) return;

        import(`../../../static/images/calendar/fullsize/${props.fullSizeImage}`)
        .then( (data) => addData(data) )
        .catch((e) => console.log(`ModalCalendarTemp: ошибка импорта\n ${e.name}: ${e.message}\n ${e.stack}`));
    }

    function addData(data) {
        if (!mounted.current) {
            console.log('ModalCalendarTemp: компонент размонтирован, импорт картинки прерван');

            return;
        }

        setPicture(data.default || data);
    }

    const FullSizePic = () => (
        <div data-close-modal className={mainContainer} style={{position: 'relative'}}>
            <div className={container}>

                <img
                    data-close-modal
                    className={backgroundCloseIcon}
                    src={closeIcon}
                    alt='close_icon'
                />

                <div className={textAndBorder}>
                    {
                        importedPicture ?
                            <PictureAndText.Over image={importedPicture} text={props.text}/>
                            : <PictureAndText.Over image={dummy} text={''}/>
                    }
                    
                </div>
            </div>
        </div>
    );

    return(
        <>
            <Modal.Set
                isOpen={isOpen}
                closeModal={() => setOpen(false)}
                modal={<FullSizePic/>}
            />

            <div onClick={() => setOpen(true)}>
                {props.children}
            </div>
        </>
    );
}

export default ModalCalendarTemp;