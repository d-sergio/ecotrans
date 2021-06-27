import React, {useContext} from "react";
import ViewContext from "../../root-layout/view-context";
import {commonStyles} from './button-arrow.module.css';
import left from "./images/arrow-left.svg";
import leftSmall from "./images/arrow-left-small.svg";
import right from "./images/arrow-right.svg";
import rightSmall from "./images/arrow-right-small.svg";

const ButtonArrow = (props) => {
    const view = useContext(ViewContext);

    const backgroundImage = getBackgroundImage(view, props.direction);

    return(<button className={commonStyles} style={{backgroundImage: `url(${backgroundImage})`}}/>);
};

function getBackgroundImage(view, direction) {
    if (direction === 'left' && view === 'mobile') {
        return leftSmall;
    } else if (direction === 'left' && view === 'desktop') {
        return left;
    } else if (direction === 'right' && view === 'mobile') {
        return rightSmall;
    } else if (direction === 'right' && view === 'desktop') {
        return right;
    }
}

export default ButtonArrow;