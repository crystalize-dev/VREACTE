import React from 'react';
import classes from "classnames";

import cl from "./buttonBlack.module.css"


const ButtonBlack = ({children, className}) => {
    return (
        <button type="submit" className={classes(cl.submitButton, className)}>
            {children}
        </button>
    );
};

export default ButtonBlack;