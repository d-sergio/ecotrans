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

function EcoSputnik(props) {
    const height = props.mobile ? 58 : 74;
    const width = props.mobile ? 58 : 74;

    const logo = (
        <svg width={width} height={height} viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.79 27.2552C59.3486 28.8184 65.6016 22.5562 64.043 21.0022L50.2466 7.20119C48.6834 5.63794 42.4304 11.9002 43.9844 13.4542L57.79 27.2552Z" fill="#3D3D3D"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.208 50.3985C14.209 49.3949 12.0121 49.9591 10.3147 51.6519C8.61733 53.3539 8.0577 55.5415 9.06133 56.5544L14.9536 62.442C15.9572 63.4502 18.1402 62.886 19.8376 61.1886C21.5442 59.4959 22.1038 57.2944 21.1002 56.2954L15.208 50.3985Z" fill="#3D3D3D"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-1.08643 14.7583L15.1473 -1.46619L21.5344 4.92094L5.3007 21.1547L-1.08643 14.7583Z" fill="#3D3D3D"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.9078 38.7296L49.2894 45.3341L45.8716 41.9162L53.3872 34.4052C53.6856 34.1008 53.921 33.7404 54.0798 33.3447C54.2386 32.9491 54.3177 32.526 54.3125 32.0997C54.3074 31.6734 54.2181 31.2523 54.0498 30.8606C53.8814 30.4689 53.6374 30.1144 53.3317 29.8172L41.7692 18.2594C41.1679 17.6494 40.3495 17.3025 39.493 17.2947C38.6366 17.2869 37.812 17.6188 37.1997 18.2177L29.6887 25.7334L26.2893 22.334L32.8985 15.7295L26.4466 9.28223L10.2729 25.4512L16.7156 31.8985L23.2553 25.3634L26.6547 28.7627L19.1206 36.3015C18.519 36.9127 18.1846 37.7377 18.1907 38.5952C18.1968 39.4528 18.5428 40.2729 19.1529 40.8756L30.7155 52.4288C31.3172 53.0425 32.1381 53.3921 32.9976 53.4008C33.857 53.4095 34.6848 53.0765 35.2988 52.4751L42.8376 44.941L46.2555 48.3588L39.7065 54.894L46.0982 61.2811L62.2718 45.1075L55.9078 38.7296Z" fill="#3D3D3D"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M50.6533 63.5289L66.8871 47.2674L73.3667 53.7378L57.1329 69.9993L50.6533 63.5289Z" fill="#3D3D3D"/>
            <defs>
                <clipPath id="clip0">
                    <rect width="74" height="74" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
    const text = <div>ЭкоСпутник</div>;

    return(
        <CardsPartnersTemp mobile={props.mobile} active={props.active} logo={logo} text={text}/>
    );
}

export default EcoSputnik;