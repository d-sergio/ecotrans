import React from "react";
import Call from "./button-call";

const Mobile = () => <Call mobile={true}/>;
const Desktop = () => <Call/>;

const call = {
    Mobile,
    Desktop
};

export default call;