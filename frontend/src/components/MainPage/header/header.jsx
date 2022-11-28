import React, {useContext} from 'react';
import cl from "./header.module.css";

import vkLogo from "../../../img/logo.png";
import Icon from "../../UI Icon/icon";
import classes from "classnames";
import {AuthContext} from "../../../context/authContext";


const Header = ({modal, setModal}) => {
    const {disAuth} = useContext(AuthContext);

    const openProfile = (e) => {
        e.stopPropagation();

        setModal(!modal)
    }

    return (
        <header className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.logoArea}>
                    <img src={vkLogo} alt="logo"/>
                    <h1>вконтакте</h1>
                </div>

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


                <div className={cl.profileArea}>
                    <div className={cl.moreArea}>
                        <Icon>apps</Icon>
                    </div>

                    <div className={cl.profile} onMouseDown={(e) => openProfile(e)}>
                        <div className={cl.roundProfile}/>
                        <Icon>expand_more</Icon>
                    </div>
                </div>

                <div className={modal ? classes(cl.modal, cl.hidden) : cl.modal} onMouseDown={(e) => e.stopPropagation()}>
                    <div className={cl.profileCard}>
                        <div className={cl.profileInfo}>
                            <div className={cl.roundProfile}/>
                            <p>Игорь Андреев</p>
                            <Icon>navigate_next</Icon>
                        </div>
                        <div className={cl.paymentInfo}>
                            <div>
                                <p>VK Pay</p>
                                <a>Открыть</a>
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
                        <p>Тема: <a>светлая</a></p>
                    </div>
                    <div className={cl.option}>
                        <Icon>help</Icon>
                        <p>Помощь</p>
                    </div>
                    <div className={cl.option} onClick={() => disAuth()}>
                        <Icon>logout</Icon>
                        <p>Выйти</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;