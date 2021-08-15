import React from 'react';
import ButtonOrder from './button-order';

const Desktop = (props) => <ButtonOrder mobile={false} {...props}/>;
const Mobile = (props) => <ButtonOrder mobile={true} {...props}/>;

const buttons = {
    Desktop,
    Mobile
};

export default buttons;