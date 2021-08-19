import React from "react";
import Send from "./button-send";

const Mobile = (props) => <Send mobile={true} {...props}/>;
const Desktop = (props) => <Send  {...props}/>;

const send = {
    Mobile,
    Desktop
};

export default send;