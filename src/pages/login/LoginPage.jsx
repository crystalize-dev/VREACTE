import React, {useContext, useEffect, useState} from 'react';
import classes from "classnames"
import cl from "./loginPage.module.css"

import vkBlack from "../../img/vkBlack.png";
import Icon from "../../components/icon/icon";
import {AuthContext} from "../../context/Authcontext";

const LoginPage = () => {
    const {isAuth, auth, disAuth} = useContext(AuthContext)
    const [switcher, setSwitcher] = useState(false)
    const [password, setPassword] = useState("")
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    const [remember, setRemember] = useState(false)

    const authenticate = (e) => {
        e.preventDefault();

        if (password.length < 3 || password.length > 16) {
            setSwitcher(true)
            return
        }
        if (isError) return

        auth(remember);
    }

    useEffect(() => {
        if (switcher && password.length < 3) {
            setIsError(true)
            setError("Password must be more than 3 symbols!")
        } else {
            if (switcher && password.length > 16) {
                setIsError(true)
                setError("Password must be less than 16 symbols!")
            } else {
                setIsError(false)
                setError("")
            }
        }
    }, [password, switcher])

    return (
        <form className={cl.wrapper} onSubmit={(e) => authenticate(e)}>
            <div className={cl.window}>
                <img alt="logo" src={vkBlack}/>
                <h1>Sign in</h1>
                <h2>Please login to use platform</h2>

                <div className={cl.emailWrap}>
                    <Icon>mail</Icon>
                    <input type="email" placeholder="Enter Email"/>
                </div>

                <div className={!isError ? classes(cl.error, cl.hidden) : cl.error}>
                     {error}
                </div>

                <div className={cl.passwordWrap}>
                    <Icon>lock</Icon>
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className={cl.options}>
                    <div className={cl.checkboxWrap}>
                        <input type="checkbox" checked={remember} onClick={() => setRemember(!remember)}/>
                        <p>Remember me</p>
                    </div>

                    <a href="/" onClick={(e) => e.preventDefault()}>I forgot my password!</a>
                </div>

                <button type="submit" className={cl.submit}>SIGN IN</button>

                <div className={cl.registerWrap}>
                    <p>Don't have an account?</p>
                    <a href="/" onClick={(e) => e.preventDefault()}>Create a free account</a>
                </div>
            </div>
        </form>
    );
};

export default LoginPage;