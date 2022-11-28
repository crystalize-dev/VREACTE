import React from 'react';

import cl from "./checkBoxBlack.module.css"


const CheckBoxBlack = ({checked, onChange, id, text}) => {
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

export default CheckBoxBlack;