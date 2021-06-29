import React from "react";
import Subscribe from "./button-subscribe";

const Mobile = () => <Subscribe/>;
const Desktop = () => <Subscribe desktop={true}/>;

const subscribe = {
    Mobile,
    Desktop
};
export default subscribe;