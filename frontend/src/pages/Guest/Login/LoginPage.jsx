import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "../../../axios/axios";

import {AuthContext} from "../../../context/authContext";

import {catchErrorsHandler} from "../../../utils/cathErrorHandler";
import {handleErrors} from "../../../utils/validation/loginErrorHandler";

import InputLogin from "../../../components/GuestPage/InputLogin/InputLogin";
import WindowForm from "../../../components/GuestPage/windowForm/windowForm";
import ButtonBlack from "../../../components/GuestPage/buttonBlackSubmit/ButtonBlack";
import CheckBox from "../../../components/UI/checkBox/checkBox";
import Loading from "../../../components/UI/loading/loading";

import cl from "./loginPage.module.css"
import {useDispatch} from "react-redux";
import {setUserData} from "../../../redux/reducer/userReducer";


const LoginPage = () => {
    const {auth} = useContext(AuthContext)

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [error, setError] = useState("")
    const [remember, setRemember] = useState(false)
    const [fetch, setFetch] = useState(false)

    const dispatch = useDispatch();

    const authenticate = async (e) => {
        e.preventDefault();

        if (handleErrors(password, email, setError)) return

        setFetch(true)
        try {
            await axios.post(
                '/auth/login',
                {email: email, password: password})

                .then((res) => {
                    dispatch(setUserData({ name: res.data.fullName,
                                                avatar: res.data.avatar,
                                                token: res.data.token}))
                })

        } catch (err) {
            catchErrorsHandler(err, setError)
            setFetch(false)
            return
        }
        setFetch(false)

        auth(remember);
    }

    return (
        <>
            <Loading status={fetch}/>
            <WindowForm onSubmit={(e) => authenticate(e)}>
                <div className={cl.textArea}>
                    <h1>Sign in</h1>

                    <h4>Please login to use platform</h4>
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
        </>
    );
};

export default LoginPage;