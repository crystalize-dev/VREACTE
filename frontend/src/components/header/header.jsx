import React, {useContext} from 'react';
import {AuthContext} from "../../context/authContext";

import cl from "./header.module.css";

import logo from "../../img/logo.png";
import profile from "../../img/profile.png";
import Icon from "../icon/icon";


const Header = () => {
    const {disAuth} = useContext(AuthContext)

    return (
        <div className={cl.header}>
            <div className={cl.wrapper}>
                <div className={cl.logo}>
                    <img alt="logo" src={logo} draggable={false}/>
                    <h1>вконтакте</h1>
                </div>

                <div className={cl.input}>
                    <input placeholder="Поиск"/>
                    <Icon>search</Icon>
                </div>

                <div className={cl.notifications}>
                    <Icon>notifications</Icon>
                </div>

                <div className={cl.music}>
                    <Icon>skip_previous</Icon>
                    <Icon>play_arrow</Icon>
                    <Icon>skip_next</Icon>
                    <p>MFS — BOW</p>
                </div>

                <div className={cl.profile}>
                    <Icon>apps</Icon>
                    <div className={cl.profileElem} onClick={() => disAuth()}>
                        <div className={cl.roundImg}>
                            <img alt="profile_logo" src={profile}/>
                        </div>
                        <Icon>expand_more</Icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;