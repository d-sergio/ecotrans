import React from "react";
import {style} from "./button-arrow.module.css";
import {arrowPic} from "./button-right.module.css";
import img from "./images/arrow-right.svg";

const cssStyle = [style, arrowPic].join(" ");

const ButtonArrowRight = () => {
    return(<button style={{backgroundImage: `url(${img})`}} className={cssStyle}/>);
};

export default ButtonArrowRight;