import React from 'react';
import {Link} from 'gatsby';
import mapPin from '../../../static/images/address/map-pin.svg';
import mail from '../../../static/images/address/mail.svg';
import phone from '../../../static/images/address/phone.svg';
import {
    outer,
    container,
    flexContainer,
    ecotrans,
    address,
    docs,
    menu,
    links
} from './footer-desktop.module.css';
import {mainContainer} from '../../common-styles/containers.module.css';
import PictureText from '../../libs/react-components/picture-and-text';

const containerStyle = [container, mainContainer].join(" ");

function FooterDesktop() {
    return(
        <div className={outer}>
            <div className={containerStyle}>
                <div className={ecotrans}>ООО “ЭКОТРАНС”</div>
                <div className={flexContainer}>
                    <Address/>
                    <Docs/>
                    <Menu/>
                    <Links/>
                </div>
            </div>
        </div>
    );
}

const Address = () => (
    <div className={address}>
        <PictureText.Right image={mapPin} text='г. Курск, пр-т Ленинского комсомола 1Б'/>

        <a href="https://api.whatsapp.com/send/?phone=+79065774934">
            <PictureText.Right image={phone} text='+7 (906)577-49-34'/>
        </a>

        <a href="mailto: ecotranskursk@yandex.ru">
            <PictureText.Right image={mail} text='ecotranskursk@yandex.ru'/>
        </a>
    </div>
);

 const Docs = () => (
    <div className={docs}>
        <p><Link to='/clients'>Разрешительная документация</Link></p>
        <p><Link to='/'>ИНН</Link></p>
        <p><Link to='/'>ОГРН</Link></p>
    </div>
);

const Menu = () => (
    <div className={menu}>
        <p><Link to='/services'>Услуги</Link></p>
        <p><Link to='/projects'>Проекты</Link></p>
        <p><Link to='/clients'>Клиентам</Link></p>
        <p><Link to='/contact'>Контакты</Link></p>
    </div>
);

const Links = () => (
    <div className={links}>
        <p>
            <a href='https://www.instagram.com/ecotrans46/'>
                Instagram
            </a>
        </p>
        
        <div>Сайт разработан we write</div>
        <div>© ООО “Экотранс” 2021</div>
    </div>
);

export default FooterDesktop;