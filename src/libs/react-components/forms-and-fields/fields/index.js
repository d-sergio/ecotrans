import React from 'react';
import Field from "./field";
import File from './file';

const Textarea = (props) => <Field fieldType='textarea' {...props}/>
const Input = Field;

const Fields = {
    Textarea,
    Input,
    File
};

export default Fields;