import React, {useState} from 'react';
import Icon from "../../UI Icon/icon";
import classes from "classnames";

import cl from "./InputLogin.module.css";


const InputLogin = ({type, placeholder, value, onChange, icon, error, className, autocomplete}) => {

    const [typeOfPass, setTypeOfPass] = useState("password")

    const switchType = () => {
        if (typeOfPass === "password")
            setTypeOfPass("text")
        else
            setTypeOfPass("password")
    }

    return (
        <div className={classes(cl.wrapper, className)}>
            <Icon>{icon}</Icon>

            <input value={value} onChange={onChange}
                   placeholder={placeholder}
                   type={type !== "password" ? type : typeOfPass}
                   autoComplete={autocomplete}
                   className={type === "password" ? cl.padding : undefined}>

            </input>

            {type === "password" &&
                <Icon onClick={() => switchType()}>
                    {typeOfPass === "password" ? "visibility" : "visibility_off"}
                </Icon>
            }

            <div className={error === "" ? classes(cl.error, cl.hidden) : cl.error}>
                {error}
            </div>
        </div>
    );
};

export default InputLogin;