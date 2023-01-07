import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import Icon from "../../Icon/icon";
import classes from "classnames";
import defaultAvatar from "../../../img/profile.jpeg"

import {ThemeContext} from "../../../context/ThemeContext";
import {AuthContext} from "../../../context/authContext";

import cl from "./header.module.css";

import {removeUserData} from "../../../redux/reducer/userReducer";
import {useDispatch, useSelector} from "react-redux";


const Header = ({modal, setModal}) => {
    const {disAuth} = useContext(AuthContext);
    const {theme, switchTheme} = useContext(ThemeContext);

    const dispatch = useDispatch();
    const userName = useSelector(state => state.toolkit.name)
    const avatar = useSelector(state => state.toolkit.avatar)

    const openProfile = (e) => {
        e.stopPropagation();

        setModal(!modal)
    }

    const disconnect = () => {
        disAuth();

        dispatch(removeUserData())
    }

    return (
        <header className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.leftArea}>
                    <div className={cl.logoArea}/>
                    <div className={cl.inputArea}>
                        <Icon>search</Icon>
                        <input placeholder="Поиск"/>
                    </div>

                    <div className={cl.notificationArea}>
                        <Icon>notifications</Icon>
                    </div>

                    <div className={cl.musicArea}>
                        <Icon>skip_previous</Icon>
                        <Icon>play_arrow</Icon>
                        <Icon>skip_next</Icon>
                        <h1>MFS - BOW</h1>
                    </div>
                </div>

                <div className={cl.rightArea}>
                    <div className={cl.profileArea}>
                        <div className={cl.moreArea}>
                            <Icon>apps</Icon>
                        </div>

                        <div className={cl.profile} onMouseDown={(e) => openProfile(e)}>
                            <img src={avatar ? avatar : defaultAvatar} alt={""} className={cl.roundProfile}/>
                            <Icon>expand_more</Icon>
                        </div>
                    </div>

                    <div className={modal ? classes(cl.modal, cl.hidden) : cl.modal}
                         onMouseDown={(e) => e.stopPropagation()}>
                        <div className={cl.profileCard}>
                            <div className={cl.profileInfo}>
                                <img src={avatar ? avatar : defaultAvatar} className={cl.roundProfile} alt=""/>
                                <p>{userName}</p>
                                <Icon>navigate_next</Icon>
                            </div>
                            <div className={cl.paymentInfo}>
                                <div>
                                    <p>VK Pay</p>
                                    <Link to={"/"}>Открыть</Link>
                                </div>
                                <Icon>currency_ruble</Icon>
                            </div>
                        </div>

                        <div className={cl.option}>
                            <Icon>settings</Icon>
                            <p>Настройки</p>
                        </div>
                        <div className={cl.option}>
                            <Icon>palette</Icon>
                            <p>Тема: <span className={cl.theme} onClick={() => switchTheme()}>{theme === "light" ? "светлая" : "тёмная"}</span></p>
                        </div>
                        <div className={cl.option}>
                            <Icon>help</Icon>
                            <p>Помощь</p>
                        </div>
                        <div className={cl.option} onClick={() => disconnect()}>
                            <Icon>logout</Icon>
                            <p>Выйти</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;