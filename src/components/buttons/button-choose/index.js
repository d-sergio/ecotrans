import React from "react";
import Choose from "./button-choose";

const Mobile = () => <Choose mobile={true}/>;
const Desktop = () => <Choose/>;

const choose = {
    Mobile,
    Desktop
};


export default choose;