import React from "react";
import PhoneContact from "./button-contact-phone";
import FormContact from './button-contact-form';
import TitleContact from './button-contact-form-title';

const PhoneMobile = () => <PhoneContact mobile={true}/>;
const PhoneDesktop = () => <PhoneContact/>;

const TitleMobile = (props) => <TitleContact mobile={true} {...props}/>;
const TitleDesktop = (props) => <TitleContact {...props}/>;

const FormMobile = (props) => <FormContact mobile={true} {...props}/>;
const FormDesktop = (props) => <FormContact {...props}/>;

const contact = {
    PhoneMobile,
    PhoneDesktop,
    FormMobile,
    FormDesktop,
    TitleMobile,
    TitleDesktop
};

export default contact;