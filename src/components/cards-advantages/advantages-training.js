import React from 'react';
import {mobile, desktop} from './advantages.module.css';

function Training(props) {
    const style = props.mobile ? mobile : desktop;
    
    return(
        <div className={style}>
            <div>Наличие лицензии</div>
            <div>и разрешения на</div>
            <div>профильное обучение</div>
            <div>сотрудников</div>
        </div>
    );
}


export default Training;