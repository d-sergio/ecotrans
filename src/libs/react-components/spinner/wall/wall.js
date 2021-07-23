import React from 'react';
import {wall, rectangle, wallImg} from './wall.module.css';
import wallPic from '../../../../../static/images/spinner/spinner.svg';

/**Стена, за которой прячутся миниатюрки */
function Wall() {
    return(
        <div className={wall}>
            <img className={wallImg} src={wallPic} alt={wallPic}/>
            <div className={rectangle}></div>
        </div>
    );
}

export default Wall;