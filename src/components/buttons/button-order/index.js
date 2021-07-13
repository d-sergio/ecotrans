import React from 'react';
import ButtonOrder from './button-order';

const Desktop = () => <ButtonOrder mobile={false}/>;
const Mobile = () => <ButtonOrder mobile={true}/>;

const buttons = {
    Desktop,
    Mobile
};

export default buttons;