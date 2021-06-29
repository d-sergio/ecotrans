import React from "react";
import {commonStyles} from './button-arrow.module.css';
import {style} from './button-arrow-right.module.css';

function ButtonArrowRight() {
    const styles = [style, commonStyles].join(" ");
    
    return(<button className={styles}/>);
};

export default ButtonArrowRight;