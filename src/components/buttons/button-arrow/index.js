import React from 'react';
import Arrow from "./button-arrow";

const MobileLeft = () => (<Arrow/>);
const DesktopLeft = () => (<Arrow desktop={true}/>);
const MobileRight = () => (<Arrow right={true}/>);
const DesktopRight = () => (<Arrow desktop={true} right={true}/>);

const arrow = {
    MobileLeft,
    DesktopLeft,
    MobileRight,
    DesktopRight
}

export default arrow;