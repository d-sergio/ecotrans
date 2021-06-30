import React from "react";
import Contact from "./button-contact";

const Mobile = () => <Contact mobile={true}/>;
const Desktop = () => <Contact/>;

const contact = {
    Mobile,
    Desktop
};

export default contact;