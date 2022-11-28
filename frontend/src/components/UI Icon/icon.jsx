import React from 'react';
import "./icon.css"

const Icon = ({children, id, onClick}) => {
    return (
        <span onClick={onClick} id={id} className="material-symbols-outlined">
            {children}
        </span>
    );
};

export default Icon;