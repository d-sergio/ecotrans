import React, { useContext } from 'react';
import {feedback, feedbackTitle, form, input, agree, message, button} from './contact-feedback.module.css';
import Button from '../buttons';
import MobileView from '../root-layout/view-context';

/**Окно "Обратная связь" страницы Контакты */
function Feedback() {
    const mobileView = useContext(MobileView);

    return(
        <div className={feedback}>
            <div className={feedbackTitle}>Обратная связь</div>

            <form className={form}>
                <input className={input} type="text" value="ФИО"/>
                <input className={input} type="text" value="e-mail"/>
                <input className={input} type="text" value="Телефон"/>
                <input className={message} type="text" value="Ваше сообщение"/>
            </form>

            <div className={agree}>
                Отправляя форму, я даю согласие<br/>
                на обработку персональных<br/>
                данных.
            </div>

            <div className={button}>
                {
                    mobileView ? <Button.Send.Mobile/> : <Button.Send.Desktop/>
                }
            </div>
        </div>
    );
}

export default Feedback;