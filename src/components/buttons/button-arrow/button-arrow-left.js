import React from "react";
import {style} from "./button-arrow.module.css";
import {arrowPic} from "./button-left.module.css";

const cssStyle = [style, arrowPic].join(" ");

const ButtonArrowLeft = () => {
    return(<button className={cssStyle}/>);
};

export default ButtonArrowLeft;