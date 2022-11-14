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

        const result = await axios.post("/forgotEmail", {email: email})

        if (result.status === 200) {
            setStatus("Done!")
        } else {
            setStatus("Something went wrong!")
        }
        setEmail("");
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
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <button>Send reset link</button>
                    {
                        status !== "false" &&
                        <p className={status === "Done!" ? cl.done : cl.error}>
                            {status}
                        </p>
                    }
                </div>
            </div>
        </form>
    );
};

export default ForgotPassword;