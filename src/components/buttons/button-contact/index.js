import React from "react";
import PhoneContact from "./button-contact-phone";
import FormContact from './button-contact-form';

const PhoneMobile = () => <PhoneContact mobile={true}/>;
const PhoneDesktop = () => <PhoneContact/>;

const FormMobile = (props) => <FormContact mobile={true} {...props}/>;
const FormDesktop = (props) => <FormContact {...props}/>;

const contact = {
    PhoneMobile,
    PhoneDesktop,
    FormMobile,
    FormDesktop
};

export default contact;