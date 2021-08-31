import React from 'react';

/**Контекст
 * 
 * anchor - целевой якорь на следующей странице, куда переходим
 * changeAnchor - функция изменения anchor
 */
const Anchor = React.createContext({
    anchor: '',
    changeAnchor: () => {}
});

export default Anchor;