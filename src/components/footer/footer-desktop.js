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
import PictureAndText from '../../libs/react-components/picture-and-text';
import CopyToClipboard from '../copy-to-clipboard';
import config from '../../config/config.json';
import Modals from '../../libs/react-components/modals';
import ModalsMessages from '../modals-messages';

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
        <PictureAndText.Right image={mapPin} text='г. Курск, пр-т Ленинского комсомола 1Б'/>

        <a target='_blank' href={`tel:${config.phone}`}>
            <PictureAndText.Right image={phone} text={config.phonePretty}/>
        </a>

        <CopyToClipboard>
            <PictureAndText.Right image={mail} text={config.email}/>
        </CopyToClipboard>
    </div>
);

 const Docs = () => (
    <div className={docs}>
        <p><Link to='/clients'>Разрешительная документация</Link></p>
        <p><a target='_blank' href='/docs/Свидетельсво о гос регистрации.PDF'>Свидетельство о гос. регистрации</a></p>
        <p><a target='_blank' href='docs/ИНН и ОГРН.PDF'>ОГРН и ИНН</a></p>
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
            <a target='_blank' href={config.instagram}>
                Instagram
            </a>
        </p>
        
        <Modals.Attach modal={<ModalsMessages.WeWrite/>}>
            <div style={{cursor: 'pointer'}}>Сайт разработан we write</div>
        </Modals.Attach>

        <div>© ООО “Экотранс” 2021</div>
    </div>
);

export default FooterDesktop;

//https://api.whatsapp.com/send/?phone=${config.phone}