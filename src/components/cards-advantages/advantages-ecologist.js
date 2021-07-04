import React from 'react';
import {mobile, desktop} from './advantages.module.css';

function Ecologist(props) {
    const style = props.mobile ? mobile : desktop;
    
    return(
        <div className={style}>
            <div>С нами вам не нужен</div>
            <div>штатный эколог</div>
            <div>на предприятии</div>
        </div>
    );
}

export default Ecologist;