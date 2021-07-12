import React, {useEffect, useRef, useState} from 'react';
import {styleMobile, logoMobile, textMobile, styleDesktop, logoDesktop, textDesktop} from './cards-partners-template.module.css';

/**Шаблон карточек "Наши партнёры"
 * Используют встроенный svg для управления цветом логотипов. Компонент
 * CardsPartnersTemp задаёт цвет свойству fill всех path, являющихся
 * прямыми потомками <svg>
 * <svg>
 *  <path d="..." fill="значение"></path>
 *  <path d="..." fill="значение"></path>
 *  <path d="..." fill="значение"></path>
 * </svg>
*/
function CardsPartnersTemp(props) {
    const slide = useRef(null);
    const logo = useRef(null);
    const text = useRef(null);

    const [activeState, setActive] = useState(undefined);

    const style = props.mobile ? styleMobile : styleDesktop;
    const logoStyle = props.mobile ? logoMobile : logoDesktop;
    const textStyle = props.mobile ? textMobile : textDesktop;

    /*Используется для корректировки по высоте карточек, в которых текст
    переносится на две и более строк.
    Содержимое карточек центрируется по высоте, чтобы при увеличении
    не выходить за пределы слайда. Перенос текста смещает логотип и начало
    текста вверх. Передавая в propStyle объект {marginTop: '...'}, можно
    компенсировать этот сдвиг*/ 
    const propStyle = props.propStyle ? props.propStyle : null;

    useEffect(() => {
        if (props.active && !props.mobile && activeState === undefined) {
            setFillGreen();
        } else if (props.active && props.mobile && activeState === undefined) {
            setFillGreen();
        } else if (activeState === true && !props.mobile) {
            setFillGreen();
        }else if (activeState === true && props.mobile) {
            setFillGreen();
        }
         else setFillGray();  
    });

    function setFillGreen() {
        text.current.style.color = '#00A550';

        if (!props.mobile) {
            slide.current.style.transform = 'scale(1.28, 1.28)';
        }

        //идём до тега <path>, так как будем менять его цвет
        const logoElem = slide.current.firstChild.firstChild;

        for (let i = 0; i < logoElem.children.length; i++) {
            if (logoElem.children[i].tagName === 'path'){
                logoElem.children[i].style.fill = '#00A550';
            }
        }
    }

    function setFillGray() {
        text.current.style.color = '#3D3D3D';
        slide.current.style.transform = 'scale(1, 1)';

        //идём до тега <path>, так как будем менять его цвет
        const logoElem = slide.current.firstChild.firstChild;
        
        for (let i = 0; i < logoElem.children.length; i++) {
            if (logoElem.children[i].tagName === 'path'){
                logoElem.children[i].style.fill = '#3D3D3D';
            }
        }
    }

    return(
        <div ref={slide}
        className={style}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        style={propStyle}
        >
            <div ref={logo} className={logoStyle}>{props.logo}</div>
            <div ref={text} className={textStyle}>{props.text}</div>
        </div>
    );
}

export default CardsPartnersTemp;