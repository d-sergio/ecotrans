import React from 'react';
import CardsPartnersTemp from "./cards-partners-template";

/**Карточки "Наши партнёры"
 * Используют встроенный svg для управления цветом логотипов. Компонент
 * CardsPartnersTemp задаёт цвет свойству fill всех path, являющихся
 * прямыми потомками <svg>
 * <svg>
 *  <path d="..." fill="значение"></path>
 *  <path d="..." fill="значение"></path>
 *  <path d="..." fill="значение"></path>
 * </svg>
*/

function EcoFund(props) {
    const height = props.mobile ? 65 : 83;
    const width = props.mobile ? 65 : 83;

    const logo = (
        <svg width={width} height={height} viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M93.7243 10.835C93.5933 8.07656 92.4386 5.46603 90.4859 3.51333C88.5332 1.56062 85.9227 0.406001 83.1642 0.275001C79.3142 0.110001 75.6292 0 72.0542 0C44.3892 0 25.1943 5.335 14.5243 16.005C-5.71574 36.245 -2.80075 64.955 15.0193 81.455H15.0743C22.5387 60.5847 37.604 43.2999 57.2592 33.055C56.1042 34.045 31.4093 52.745 26.9543 89.43C32.7292 92.07 39.0542 93.555 45.4342 93.555C56.7092 93.555 68.3142 89.155 77.9942 79.53C90.0392 67.43 95.2643 44.55 93.7243 10.835Z" fill="#3D3D3D"/>
        </svg>
    );

    const text = props.mobile ? 
        <div>Фонд по защите<br/>экологии<br/>Курской области</div>
       : <div>Фонд по защите экологии<br/>Курской области</div>;

    return(
        <CardsPartnersTemp propStyle={{marginTop: '1rem'}} mobile={props.mobile} active={props.active} logo={logo} text={text}/>
    );
}

export default EcoFund;