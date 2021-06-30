import React from 'react';
import Arrow from "./button-arrow";

const MobileLeft = () => (<Arrow mobile={true}/>);
const DesktopLeft = () => (<Arrow/>);
const MobileRight = () => (<Arrow mobile={true} right={true}/>);
const DesktopRight = () => (<Arrow right={true}/>);

const arrow = {
    MobileLeft,
    DesktopLeft,
    MobileRight,
    DesktopRight
}

export default arrow;