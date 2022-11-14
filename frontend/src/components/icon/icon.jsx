import React from 'react';
import "./icon.css"

const Icon = ({children, id}) => {
    return (
        <span id={id} className="material-symbols-outlined">
            {children}
        </span>
    );
};

export default Icon;