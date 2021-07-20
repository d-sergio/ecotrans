import React from 'react';
import {address, title, line, instagram, social} from './contact-address.module.css';
import addressPic from '../../../static/images/contact/address.svg';
import phonePic from '../../../static/images/contact/phone.svg';
import emailPic from '../../../static/images/contact/email.svg';
import clockPic from '../../../static/images/contact/clock.svg';
import instagramPic from '../../../static/images/contact/instagram.svg';


/**Окно Контакты на странице Контакты */
function Address() {
    return(
        <div className={address}>
            <div className={title}>
                Контакты
            </div>

            <div className={line}>
                <img src={addressPic} alt="address"/>
                <p>Россия, г. Курск, проспект Ленинского комсомола 1Б</p>
            </div>

            <div className={line}>
                <img src={phonePic} alt="phone"/>
                <p>+ 7 (906) 577 49 34</p>
            </div>

            <div className={line}>
                <img src={emailPic} alt="email"/>
                <p>ecotranskursk@yandex.ru</p>
            </div>

            <div className={line}>
                <img src={clockPic} alt="clock"/>
                <p>с 09.00 до 18.00</p>
            </div>

            <div className={title}>
                <p className={social}>Социальные сети</p>
            </div>

            <div className={instagram}>
                <img src={instagramPic} alt="instagram"/>
                <p>
                    Все самые свежие новости доступны
                    в нашем инстаграм аккаунте!
                    Подпишитесь сейчас и оставайтесь с 
                    нами рядом ;)
                </p>
            </div>
        </div>
    );
}

export default Address;