import React from "react";
import Send from "./button-send";

const Mobile = () => <Send mobile={true}/>;
const Desktop = () => <Send/>;

const send = {
    Mobile,
    Desktop
};

export default send;