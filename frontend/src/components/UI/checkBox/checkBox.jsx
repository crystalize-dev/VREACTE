import React from 'react';

import cl from "./checkBox.module.css"


const CheckBox = ({checked, onChange, id, text}) => {
    return (
        <div className={cl.wrapper}>
            <input className={cl.customCheckBox}
                   type="checkbox"
                   checked={checked} onChange={onChange}
                   id={id}/>

            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default CheckBox;