import React from 'react';
import {Link} from 'gatsby';
import mapPin from '../../../static/images/address/map-pin.svg';
import mail from '../../../static/images/address/mail.svg';
import phone from '../../../static/images/address/phone.svg';
import {mainContainer} from '../../common-styles/containers.module.css';
import PictureAndText from '../../libs/react-components/picture-and-text';
import CopyToClipboard from '../copy-to-clipboard';
import config from '../../config/config.json';
import Modals from '../../libs/react-components/modals';
import ModalsMessages from '../modal-messages';
import {footerMobile, footerDesktop, containerDesktop,
    flexContainerDesktop, ecotransDesktop, addressDesktop,
    docsDesktop, menuDesktop, linksDesktop} from './footer.module.css';

function Footer() {
    const containerStyle = [containerDesktop, mainContainer].join(" ");

    const Address = () => (
        <div className={addressDesktop}>
            <a target='_blank' href={config.openstreetmap}>
                <PictureAndText.Right image={mapPin} text='г. Курск, пр-т Ленинского комсомола 1Б'/>
            </a>
    
            <a target='_blank' href={`tel:${config.phone}`}>
                <PictureAndText.Right image={phone} text={config.phonePretty}/>
            </a>
    
            <CopyToClipboard>
                <PictureAndText.Right image={mail} text={config.email}/>
            </CopyToClipboard>
        </div>
    );
    
     const Docs = () => (
        <div className={docsDesktop}>
            <p><Link to='/clients'>Разрешительная документация</Link></p>
            <p><a target='_blank' href='/docs/Свидетельсво о гос регистрации.PDF'>Свидетельство о гос. регистрации</a></p>
            <p><a target='_blank' href='docs/ИНН и ОГРН.PDF'>ОГРН и ИНН</a></p>
        </div>
    );
    
    const Menu = () => (
        <div className={menuDesktop}>
            <p><Link to='/services'>Услуги</Link></p>
            <p><Link to='/projects'>Проекты</Link></p>
            <p><Link to='/clients'>Клиентам</Link></p>
            <p><Link to='/contact'>Контакты</Link></p>
        </div>
    );
    
    const Links = () => (
        <div className={linksDesktop}>
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
    
    return (
        <>
            <div className={footerMobile}>
                <p style={{fontFamily: 'MontserratBold'}}>ООО “ЭКОТРАНС”</p>
                <p style={{marginTop: '0.75rem'}}>
                    <a href={`tel:${config.phone}`}>
                        {config.phonePretty}
                    </a>
                </p>
                <div style={{marginTop: '0.5rem', marginBottom: '1.5rem'}}>
                    <CopyToClipboard>
                        {config.email}
                    </CopyToClipboard>
                </div>

                <Link to='/clients'>Разрешительная документация</Link>

                <Modals.Attach modal={<ModalsMessages.WeWrite/>}>
                    <p style={{marginTop: '1.5rem', cursor: 'pointer'}}>Сайт разработан we write</p>
                </Modals.Attach>

                <p style={{marginTop: '0.75rem'}}>© ООО “Экотранс” 2021</p>
            </div>


            <div className={footerDesktop}>
                <div className={containerStyle}>
                <div className={ecotransDesktop}>ООО “ЭКОТРАНС”</div>
                    <div className={flexContainerDesktop}>
                        <Address/>
                        <Docs/>
                        <Menu/>
                        <Links/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;