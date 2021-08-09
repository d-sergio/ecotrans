import React from 'react';
import ModalEcotransTemp from './modal-messages-temp';
import config from '../../config/config.json';

function EmailSent() {
    return(
        <ModalEcotransTemp
            title='Спасибо!'
            text='Наши специалисты получили ваше письмо! Совсем скоро мы свяжемся с вами.'
        />
    );
}

function AddressCopied() {
    return(
        <ModalEcotransTemp
            title='Адрес скопирован в буфер обмена'
            text='Вы же не наверняка не пользуйтесь mail - агентом'
        />
    );
}

function WeWrite() {
    return(
        <ModalEcotransTemp
            title='Уникальное web - решение для вас'
            text={<div>Звоните нам или пишите в любом мессенджере<br/>{config.phonePretty}</div>}
        />
    );
}

const modals = {
    EmailSent,
    AddressCopied
};

export default modals;