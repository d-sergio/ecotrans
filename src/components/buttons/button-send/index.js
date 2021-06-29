import React from "react";
import Send from "./button-send";

const Mobile = () => <Send/>;
const Desktop = () => <Send desktop={true}/>;

const send = {
    Mobile,
    Desktop
};

export default send;