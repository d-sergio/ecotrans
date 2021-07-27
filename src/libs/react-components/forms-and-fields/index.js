import React from 'react';
import Field from "./field";
import Form from './form';

const Textarea = (props) => <Field fieldType='textarea' {...props}/>
const Input = Field;

const Forms = {
    Input,
    Textarea,
    Form
};

export default Forms;