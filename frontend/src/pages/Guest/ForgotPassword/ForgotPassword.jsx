import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "../../../axios/axios"

import cl from "./ForgotPassword.module.css";

import vkBlack from "../../../img/vkBlack.png";
import Icon from "../../../components/icon/icon";


const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState("false")

    const sendReq = async (e) => {
        e.preventDefault();

        if (email === "") {
            setStatus("Fill in the filed!")
            return
        }

        try {
            await axios.post(
                'http://localhost:4444/forgotEmail',
                {email: email})

                .then(() => {
                    setEmail('')
                    setStatus('Done!')
                })
        } catch (err) {
            if (err.response) {
                setStatus(err.response.data.message)
                return
            }

            setStatus(err.message)
        }
    }

    return (
        <form className={cl.wrapper} onSubmit={(e) => sendReq(e)}>
            <div className={cl.window}>
                <Link to="/">
                    <Icon>arrow_back</Icon>
                </Link>

                <img alt="logo" src={vkBlack}/>

                <div className={cl.textArea}>
                    <h1>Forgot password?</h1>
                    <h2>Enter your email to reset it</h2>
                </div>

                <div className={cl.inputArea}>
                    <div className={cl.emailWrap}>
                        <Icon>mail</Icon>

                        <input type="email"
                               placeholder="Enter Email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               autoComplete={"on"}/>
                    </div>

                    <button type="submit">Send reset link</button>
                    {
                        status !== "false" ?
                        <p className={status === "Done!" ? cl.done : cl.error}>
                            {status}
                        </p>
                            :
                            null
                    }
                </div>
            </div>
        </form>
    );
};

export default ForgotPassword;