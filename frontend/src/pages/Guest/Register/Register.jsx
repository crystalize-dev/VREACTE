import React, {useState} from 'react';
import axios from "../../../axios/axios";
import {useNavigate} from "react-router-dom";

import cl from "./Register.module.css";

import {catchErrorsHandler} from "../../../utils/cathErrorHandler";
import {registerErrorHandler} from "../../../validation/registerErrorHandler";
import InputLogin from "../../../components/GuestPage/InputLogin/InputLogin";
import WindowForm from "../../../components/GuestPage/windowForm/windowForm";
import ButtonBlack from "../../../components/GuestPage/buttonBlackSubmit/ButtonBlack";
import Loading from "../../../components/UI/loading/loading.jsx";


const Register = () => {
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [fetch, setFetch] = useState(true)

    const [error, setError] = useState('')

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        if (registerErrorHandler(passwordRepeat, password, email, fullName, setError)) return

        try {
            setFetch(false)

            await axios.post("/auth/register", {
                email: email,
                password: password,
                fullName: fullName
            })

            setEmail("")
            setPassword("")
            setPasswordRepeat("")
            setFullName("")

            navigate("/")
        } catch (err) {
            catchErrorsHandler(err, setError)
        }

        setFetch(true)
    }

    return (
        <>
        <Loading status={!fetch}/>
        <WindowForm onSubmit={(e) => register(e)} backArrow={true}>
            <h2>Registration</h2>

            <div className={cl.inputArea}>
                <InputLogin value={fullName} onChange={(e) => setFullName(e.target.value)}
                            type="text" placeholder="Enter Name"
                            icon={"person"}
                            autocomplete={"on"}/>

                <InputLogin value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email" placeholder="Enter Email"
                            icon={"mail"}
                            autocomplete={"on"}/>

                <InputLogin value={password} onChange={(e) => setPassword(e.target.value)}
                            type="password" placeholder="Enter Password"
                            icon={"lock"}
                            autocomplete={"off"}/>

                <InputLogin value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}
                            type="password" placeholder="Repeat Password"
                            icon={"enhanced_encryption"}
                            autocomplete={"off"} error={error}/>
            </div>

            <ButtonBlack className={cl.submitButton}>Register</ButtonBlack>
        </WindowForm>
        </>
    );
};

export default Register;