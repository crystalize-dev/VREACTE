import React from 'react';
import cl from "./Register.module.css";
import vkBlack from "../../../img/vkBlack.png";
import {Link} from "react-router-dom";
import Icon from "../../../components/icon/icon";

const Register = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.window}>
                <Link to="/">
                    <Icon>arrow_back</Icon>
                </Link>

                <img alt="logo" src={vkBlack}/>

                <div className={cl.inputArea}>

                </div>

                <button>REGISTER</button>
            </div>
        </div>
    );
};

export default Register;