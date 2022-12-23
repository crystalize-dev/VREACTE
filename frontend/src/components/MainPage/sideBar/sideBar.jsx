import React from 'react';

import cl from "./sideBar.module.css"

import vkLogo from "../../../img/logo.png";
import Icon from "../../Icon/icon";
import {Link} from "react-router-dom";


const SideBar = () => {
    return (
        <div className={cl.wrapper}>
            <Link to={"/"} className={cl.logoArea}>
                <img src={vkLogo} alt="logo" draggable={false}/>
                <h1>вконтакте</h1>
            </Link>

            <div className={cl.subLinksArea}>
                <Link to={"/me"} className={cl.subLinkElem}>
                    <Icon>account_circle</Icon>
                    <p>Моя страница</p>
                </Link>

                <Link to={"/news"} className={cl.subLinkElem}>
                    <Icon>newspaper</Icon>
                    <p>Новости</p>
                </Link>

                <Link to={"/messages"} className={cl.subLinkElem}>
                    <Icon>chat</Icon>
                    <p>Мессенджер</p>
                </Link>

                <Link to={"/friends"} className={cl.subLinkElem}>
                    <Icon>group</Icon>
                    <p>Друзья</p>
                </Link>

                <Link to={"/groups"} className={cl.subLinkElem}>
                    <Icon>groups</Icon>
                    <p>Сообщетсва</p>
                </Link>

                <Link to={"/photos"} className={cl.subLinkElem}>
                    <Icon>photo</Icon>
                    <p>Фотографии</p>
                </Link>

                <Link to={"/music"} className={cl.subLinkElem}>
                    <Icon>headphones</Icon>
                    <p>Музыка</p>
                </Link>

                <Link to={"/video"} className={cl.subLinkElem}>
                    <Icon>video_library</Icon>
                    <p>Видео</p>
                </Link>

                <Link to={"/files"} className={cl.subLinkElem}>
                    <Icon>home_storage</Icon>
                    <p>Файлы</p>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;