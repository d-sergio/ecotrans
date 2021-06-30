import React from "react";
import Subscribe from "./button-subscribe";

const Mobile = () => <Subscribe mobile={true}/>;
const Desktop = () => <Subscribe/>;

const subscribe = {
    Mobile,
    Desktop
};
export default subscribe;