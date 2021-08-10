import React from 'react';

/**Контекст
 * 
 * destination - 
 */
const Anchor = React.createContext({
    anchor: '',
    changeAnchor: () => {}
});

export default Anchor;