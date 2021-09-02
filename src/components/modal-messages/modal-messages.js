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
            text='Вы же наверняка не пользуйтесь mail - агентом'
        />
    );
}

function WeWrite() {
    return(
        <ModalEcotransTemp
            title='Уникальное web - решение для вас'
            text={<div>Звоните нам или пишите в любом мессенджере<br/>{config.weWritePhone}</div>}
        />
    );
}

/**Нельзя закрыть окно, пока идёт отправка */
function EmailSending() {
    return(
        <ModalEcotransTemp withCross={false}
            title='Отправка сообщения...'
            text=''
        />
    );
}

function EmailError() {
    return(
        <ModalEcotransTemp
            title='Упс...'
            text='Что-то пошло не так. Не удалось отправить сообщение (('
        />
    );
}

const modals = {
    EmailSent,
    AddressCopied,
    WeWrite,
    EmailSending,
    EmailError
};

export default modals;