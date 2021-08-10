import React from 'react';

const ActiveItemContext = React.createContext({
    currentPage: '',
    currentActive: '',
    selectItem: () => {}
});

export default ActiveItemContext;