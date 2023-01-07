import React, {useState} from 'react';
import axios from "../../../axios/axios";
import {useNavigate} from "react-router-dom";

import cl from "./Register.module.css";

import {catchErrorsHandler} from "../../../utils/cathErrorHandler";
import {registerErrorHandler} from "../../../utils/validation/registerErrorHandler";
import InputLogin from "../../../components/GuestPage/InputLogin/InputLogin";
import WindowForm from "../../../components/GuestPage/windowForm/windowForm";
import ButtonBlack from "../../../components/GuestPage/buttonBlackSubmit/ButtonBlack";
import Loading from "../../../components/UI/loading/loading.jsx";
import Icon from "../../../components/Icon/icon";
import classes from "classnames";


const Register = () => {
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')

    const [fetch, setFetch] = useState(false)

    const [image, setImage] = useState()
    const [imagePreview, setImagePreview] = useState("")

    const [error, setError] = useState('')

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        if (registerErrorHandler(passwordRepeat, password, email, fullName, setError)) return

        setFetch(true)

        try {
            await axios.post("/auth/register", {
                email: email,
                password: password,
                fullName: fullName,
                avatar: image
            })

            navigate("/")
        } catch (err) {
            catchErrorsHandler(err, setError)
        }

        setFetch(false)
        setImagePreview("")
        setImage(null)
    }

    const uploadImage = async (e) => {
        if (e.target.type !== "file") return

        // noinspection JSCheckFunctionSignatures
        setImagePreview(URL.createObjectURL(e.target.files[0]))

        setFetch(true)

        try {
            const formData = new FormData()
            formData.append("avatar", e.target.files[0])

            await axios.post("/upload", formData)
                .then(res => {
                    setImage(res.data.path)
                })

        } catch (err) {
            catchErrorsHandler(err, setError)
        }

        setFetch(false)
    }

    return (
        <>
        <Loading status={fetch}/>
        <WindowForm onSubmit={(e) => register(e)} backArrow={true} onChange={(e) => uploadImage(e)}>
            <h3>Регистрация</h3>

            <div className={imagePreview ? classes(cl.dropZone, cl.hideBorder) : cl.dropZone} onChange={() => uploadImage}>
                {imagePreview && <img alt={""} src={imagePreview} draggable={false}/>}
                {!imagePreview && <Icon>photo_camera</Icon>}
                <input type="file" accept={"image/*,.png,.jpeg"} size={0} multiple={false}/>
            </div>

            <div className={cl.inputArea}>
                <InputLogin value={fullName} onChange={(e) => setFullName(e.target.value)}
                            type="text" placeholder="Введите полное имя"
                            icon={"person"}
                            autocomplete={"on"}/>

                <InputLogin value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email" placeholder="Введите email"
                            icon={"mail"}
                            autocomplete={"on"}/>

                <InputLogin value={password} onChange={(e) => setPassword(e.target.value)}
                            type="password" placeholder="Введите пароль"
                            icon={"lock"}
                            autocomplete={"off"}/>

                <InputLogin value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}
                            type="password" placeholder="Повторите пароль"
                            icon={"enhanced_encryption"}
                            autocomplete={"off"} error={error}/>
            </div>

            <ButtonBlack className={cl.submitButton}>Зарегистрироваться</ButtonBlack>
        </WindowForm>
        </>
    );
};

export default Register;