import React from 'react';
import logoImg from '../../../static/images/logo.png';
import phoneImg from '../../../static/images/phone.png';
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';

/**Header
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function Header(props) {
    const showHeader = props.mobile === true ?
        <HeaderMobile logo={logoImg} phone={phoneImg}/>
        : <HeaderDesktop logo={logoImg} phone={phoneImg}/>;

    return showHeader;
}

export default Header;