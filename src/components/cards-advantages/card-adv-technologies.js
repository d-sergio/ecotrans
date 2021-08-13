import React from 'react';
import {mobile, desktop} from './card-adv.module.css';

function Technologies(props) {
    const style = props.mobile ? mobile : desktop;
    
    return(
        <div key='technologiesCard' className={style}>
            <div>Специализированная</div>
            <div>площадка, собственное</div>
            <div>оборудование,</div>
            <div>технологии</div>
        </div>
    );
}

export default Technologies;