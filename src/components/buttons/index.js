import React from "react";
import Contact from "./button-contact";
import Choose from "./button-choose";
import Call from "./button-call";
import Detailed from "./button-detailed";
import Send from "./button-send";
import Subscribe from "./button-subscribe";
import Arrow from "./button-arrow/button-arrow";

const ArrowLeft = () => <Arrow direction={'left'}/>;
const ArrowRight= () => <Arrow direction={'right'}/>;

const buttons = {
    Contact,
    Choose,
    Call,
    Detailed,
    Send,
    Subscribe,
    ArrowLeft,
    ArrowRight
};

export default buttons;