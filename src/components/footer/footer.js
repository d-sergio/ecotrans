import React from 'react';
import FooterDesktop from './footer-desktop';
import FooterMobile from './footer-mobile';

/**Footer
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function Footer(props) {
    const viewMode = props.mobile === true ? <FooterMobile/> : <FooterDesktop/>;
    
    return viewMode;
}

export default Footer;