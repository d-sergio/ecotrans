import React from "react";
import Call from "./button-call";

const Mobile = () => <Call/>;
const Desktop = () => <Call desktop={true}/>;

const call = {
    Mobile,
    Desktop
};

export default call;