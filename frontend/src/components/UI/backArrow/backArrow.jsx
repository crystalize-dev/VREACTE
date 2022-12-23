import React from 'react';
import {Link} from "react-router-dom";

import cl from "./backArrow.module.css";

import Icon from "../../Icon/icon";
import classes from "classnames";


const BackArrow = ({className}) => {
    return (
        <Link to={"../"} className={classes(cl.arrow, className)}>
            <Icon>arrow_back</Icon>
        </Link>
    );
};

export default BackArrow;