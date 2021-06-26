import React from "react";
import {style} from "./button-arrow.module.css";
import {arrowPic} from "./button-right.module.css";

const cssStyle = [style, arrowPic].join(" ");

const ButtonArrowRight = () => {
    return(<button className={cssStyle}/>);
};

export default ButtonArrowRight;