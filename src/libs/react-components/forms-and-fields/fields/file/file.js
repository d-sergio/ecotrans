import React from 'react';

function File(props) {
    return(
        <label className={props.className}>{props.fieldName}
            <input accept={props.accept} style={{display: 'none'}} type="file"/>
        </label>
    );
}

export default File;