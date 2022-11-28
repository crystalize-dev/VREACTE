import React, {useContext, useState} from 'react';
import {AuthContext} from "../../../context/authContext";
import {Link} from "react-router-dom";
import classes from "classnames"

import cl from "./loginPage.module.css"

import vkBlack from "../../../img/vkBlack.png";
import Icon from "../../../components/icon/icon";
import axios from "../../../axios/axios";
import {handleErrors} from "../../../validation/loginErrorHandler";


const LoginPage = () => {
    const {auth} = useContext(AuthContext)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [error, setError] = useState("")
    const [remember, setRemember] = useState(false)

    const authenticate = async (e) => {
        e.preventDefault();

        if (handleErrors(password, email, setError)) return

        try {
            await axios.post(
                'http://localhost:4444/auth/login',
                {email: email, password: password})

                .then(() => {
                    setEmail('')
                    setPassword('')
                })

        } catch (err) {
            if (err.response) {
                setError(err.response.data.message)
                return
            }
            setError(err.message)
            return
        }

        auth(remember);
    }

    return (
            <form className={cl.wrapper} onSubmit={(e) => authenticate(e)}>

                <div className={cl.window}>
                    <img alt="logo" src={vkBlack}/>

                    <div className={cl.textArea}>
                        <h1>Sign in</h1>
                        <h2>Please login to use platform</h2>
                    </div>

                    <div className={cl.emailWrap}>
                        <Icon>mail</Icon>
                        <input type="email" placeholder="Enter Email"
                               value={email} onChange={(e) => setEmail(e.target.value)}
                               autoComplete={"on"}/>
                    </div>
                    <div className={cl.passwordWrap}>
                        <Icon>lock</Icon>
                        <input type="password" placeholder="Enter Password"
                               value={password} onChange={(e) => setPassword(e.target.value)}
                               autoComplete={"off"}/>
                        <div className={error === "" ? classes(cl.error, cl.hidden) : cl.error}>
                            {error}
                        </div>
                    </div>
                    <div className={cl.options}>
                        <div className={cl.checkboxWrap}>
                            <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)}/>
                            <p>Remember me</p>
                        </div>

                        <Link to="/forgot">I forgot my password!</Link>
                    </div>

                    <div className={cl.buttonArea}>
                        <button type="submit" className={cl.submit}>SIGN IN</button>

                        <div className={cl.registerWrap}>
                            <p>Don't have an account?</p>
                            <Link to="/register">Create a free account</Link>
                        </div>
                    </div>
                </div>
            </form>
    );
};

export default LoginPage;