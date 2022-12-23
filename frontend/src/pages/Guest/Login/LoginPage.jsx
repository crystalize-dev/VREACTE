import React, {useContext, useState} from 'react';
import {AuthContext} from "../../../context/authContext";
import {Link} from "react-router-dom";
import axios from "../../../axios/axios";

import cl from "./loginPage.module.css"

import {catchErrorsHandler} from "../../../utils/cathErrorHandler";
import {handleErrors} from "../../../validation/loginErrorHandler";
import InputLogin from "../../../components/GuestPage/InputLogin/InputLogin";
import WindowForm from "../../../components/GuestPage/windowForm/windowForm";
import ButtonBlack from "../../../components/GuestPage/buttonBlackSubmit/ButtonBlack";
import {UserContext} from "../../../context/userContext";
import CheckBox from "../../../components/UI/checkBox/checkBox";


const LoginPage = () => {
    const {auth} = useContext(AuthContext)

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const {setUserData: changeUserData} = useContext(UserContext)

    const [error, setError] = useState("")
    const [remember, setRemember] = useState(false)

    const authenticate = async (e) => {
        e.preventDefault();

        if (handleErrors(password, email, setError)) return

        try {
            await axios.post(
                '/auth/login',
                {email: email, password: password})

                .then((res) => {
                    setEmail('')
                    setPassword('')

                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('fullName', res.data.fullName)

                    changeUserData(res.data.fullName)
                })
        } catch (err) {
            catchErrorsHandler(err, setError)
            return
        }

        auth(remember);
    }

    return (
        <WindowForm onSubmit={(e) => authenticate(e)}>
            <div className={cl.textArea}>
                <h1>Sign in</h1>

                <h3>Please login to use platform</h3>
            </div>

            <InputLogin placeholder={"Enter Email"}
                        icon={"mail"} type={"email"}
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        autocomplete={"on"}/>

            <InputLogin placeholder={"Enter Password"}
                        icon={"lock"} type={"password"} error={error}
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        autocomplete={"off"}/>

            <div className={cl.options}>
                <CheckBox text={"Remember me"}
                               checked={remember} onChange={() => setRemember(!remember)}
                               id={"checkBox1"}/>

                <Link to="/forgot">I forgot my password!</Link>
            </div>

            <div className={cl.buttonArea}>
                <ButtonBlack>SIGN IN</ButtonBlack>

                <div className={cl.registerWrap}>
                    <p>Don't have an account?</p>
                    <Link to="/register">Create a free account</Link>
                </div>
            </div>
        </WindowForm>
    );
};

export default LoginPage;