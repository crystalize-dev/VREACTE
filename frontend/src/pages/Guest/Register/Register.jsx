import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import cl from "./Register.module.css";

import vkBlack from "../../../img/vkBlack.png";
import Icon from "../../../components/icon/icon";
import classes from "classnames";
import {registerErrorHandler} from "../../../validation/registerErrorHandler";
import axios from "../../../axios/axios";


const Register = () => {
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')

    const [error, setError] = useState('false')

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        if (registerErrorHandler(passwordRepeat, password, email, fullName, setError)) return

        try {
            await axios.post("/auth/register", {
                email: email,
                password: password,
                fullName: fullName})

            setEmail("")
            setPassword("")
            setPasswordRepeat("")
            setFullName("")

            navigate("/")
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    return (
        <form className={cl.wrapper} onSubmit={(e) => register(e)}>
            <div className={cl.window}>
                <Link to="/">
                    <Icon>arrow_back</Icon>
                </Link>

                <img alt="logo" src={vkBlack}/>
                <h1>Registrarion</h1>

                <div className={cl.inputArea}>
                    <div className={cl.inputWrapper}>
                        <Icon>person</Icon>
                        <input value={fullName} onChange={(e) => setFullName(e.target.value)}
                               type="text" placeholder="Enter Name"/>
                    </div>
                    <div className={cl.inputWrapper}>
                        <Icon>mail</Icon>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                               type="email" placeholder="Enter Email"/>
                    </div>
                    <div className={cl.inputWrapper}>
                        <Icon>lock</Icon>
                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                               type="password" placeholder="Enter Password"/>
                    </div>
                    <div className={cl.inputWrapper}>
                        <Icon>enhanced_encryption</Icon>
                        <input value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}
                               type="password" placeholder="Repeat Password"/>
                    </div>
                </div>

                <div className={cl.btnArea}>
                    <p className={error === "false" ? classes(cl.error, cl.hidden) : cl.error}>
                        {error}
                    </p>

                    <button>REGISTER</button>
                </div>
            </div>
        </form>
    );
};

export default Register;