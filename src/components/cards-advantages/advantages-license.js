import React from 'react';
import {mobile, desktop} from './advantages.module.css';

function License(props) {
    const style = props.mobile ? mobile : desktop;
    
    return(
        <div className={style}>
            <div>Наличие ГЭЭ</div>
            <div>и Лицензии на утилизацию,</div>
            <div>обезвреживание</div>
            <div>и обработку отходов</div>
        </div>
    );
}

export default License;