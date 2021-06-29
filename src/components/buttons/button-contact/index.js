import React from "react";
import Contact from "./button-contact";

const Mobile = () => <Contact/>;
const Desktop = () => <Contact desktop={true}/>;

const contact = {
    Mobile,
    Desktop
};

export default contact;