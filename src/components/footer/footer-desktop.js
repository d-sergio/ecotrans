import React from 'react';
import {Link} from 'gatsby';
import mapPin from '../../../static/images/address/map-pin.svg';
import mail from '../../../static/images/address/mail.svg';
import phone from '../../../static/images/address/phone.svg';
import {outer, container, flexContainer, ecotrans, address, docs, menu, links} from './footer-desktop.module.css';

function FooterDesktop() {
    return(
        <div className={outer}>
            <div className={container}>
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
        <div>
            <img src={mapPin} alt="map_pin"/>
            г. Курск, пр-т Ленинского комсомола 1Б
        </div>
        <div>
        <img src={mail} alt="mail"/>
            +7 (906)577-49-34
        </div>
        <div>
        <img src={phone} alt="phone"/>
            ecotranskursk@yandex.ru
        </div>
    </div>
);

 const Docs = () => (
    <div className={docs}>
        <p><Link to='/'>Разрешительная документация</Link></p>
        <p><Link to='/'>ИНН</Link></p>
        <p><Link to='/'>ОГРН</Link></p>
    </div>
);

const Menu = () => (
    <div className={menu}>
        <p><Link to='/'>Услуги</Link></p>
        <p><Link to='/'>Проекты</Link></p>
        <p><Link to='/'>Клиентам</Link></p>
        <p><Link to='/'>Контакты</Link></p>
    </div>
);

const Links = () => (
    <div className={links}>
        <p><Link to='/'>Instagram</Link></p>
        <div>Сайт разработан we write</div>
        <div>© ООО “Экотранс” 2021</div>
    </div>
);

export default FooterDesktop;