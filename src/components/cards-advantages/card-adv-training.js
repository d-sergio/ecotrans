import React from 'react';
import {mobile, desktop} from './card-adv.module.css';

function Training(props) {
    const style = props.mobile ? mobile : desktop;
    
    return(
        <div key='trainingCard' className={style}>
            <div>Наличие лицензии</div>
            <div>и разрешения на</div>
            <div>профильное обучение</div>
            <div>сотрудников</div>
        </div>
    );
}


export default Training;