import React from 'react';
import Field from "./field";
import Form from './form';
import Validate from './validate';

const Textarea = (props) => <Field fieldType='textarea' {...props}/>
const Input = Field;

const Forms = {
    Input,
    Textarea,
    Form,
    Validate
};

export default Forms;