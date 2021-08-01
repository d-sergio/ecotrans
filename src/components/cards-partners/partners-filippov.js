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
function Filippov(props) {
    const height = props.mobile ? 54 : 69;
    const width = props.mobile ? 53 : 68;

    const logo = (
        <svg width={width} height={height} viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69 24.0059C69 10.5985 58.0873 -0.202849 44.6772 0.0028911C31.5751 0.208631 20.765 11.5586 21.1413 24.6574C21.2921 30.2109 23.364 35.5392 27.0022 39.7302C30.6405 43.9213 35.6189 46.7145 41.0853 47.6317V61.142H13.6837V50.855H15.3941C16.352 50.855 17.1046 50.1006 17.1046 49.1405V37.139C17.1046 35.253 15.5652 33.71 13.6837 33.71H3.42092C1.53941 33.71 0 35.253 0 37.139V49.1405C0 50.1006 0.752603 50.855 1.71046 50.855H3.42092V64.571C3.42092 66.4569 4.96034 68 6.84184 68H54.7348C56.6163 68 58.1557 66.4569 58.1557 64.571C58.1557 62.685 56.6163 61.142 54.7348 61.142H47.8929V47.8375C53.7105 47.1411 59.0716 44.3311 62.9613 39.9393C66.851 35.5475 68.9995 29.8787 69 24.0059Z" fill="#3D3D3D"/>
        </svg>
    );
    const text = <div>ИП Филиппов</div>;

    return(
        <CardsPartnersTemp mobile={props.mobile} active={props.active} logo={logo} text={text}/>
    );
}

export default Filippov;