import React from 'react';
import {text} from './block-instagram-max.module.css';

function Text() {
    return(
        <div className={text}>
            Мы освободили вашу почту от спам - рассылки с просьбой скинуть нам ваш email. <br/>
            Вместо этого приглашем подписаться на наш Instagram. Тут вся полезная информация <br/>
            не только о деятельности компании, но и последние новости экологического законодательства, <br/>
            полезные советы по утилизации отходов и многое другое.
        </div>
    );
}

export default Text;