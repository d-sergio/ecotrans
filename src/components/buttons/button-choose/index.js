import React from "react";
import Choose from "./button-choose";

const Mobile = () => <Choose/>;
const Desktop = () => <Choose desktop={true}/>;

const choose = {
    Mobile,
    Desktop
};


export default choose;