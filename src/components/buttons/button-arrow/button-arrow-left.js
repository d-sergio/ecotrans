import React from "react";
import {commonStyles} from './button-arrow.module.css';
import {style} from './button-arrow-left.module.css';

function ButtonArrowLeft() {
    const styles = [style, commonStyles].join(" ");
    
    return(<button className={styles}/>);
};

export default ButtonArrowLeft;