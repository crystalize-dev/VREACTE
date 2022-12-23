import React, {useContext} from 'react';
import cl from "./friendElem.module.css";
import lightImg from "../../../../img/profile.jpeg";
import darkImg from "../../../../img/profileDark.png";
import {ThemeContext} from "../../../../context/ThemeContext";

const FriendElem = ({img, sender = "Отправтель",
                    lastMessage="Последнее сообщение",
                    chatName="Название чата"}) =>
{
    const {theme} = useContext(ThemeContext);

    if (!img) {
        theme === "light" ? img = lightImg : img = darkImg;
    }

    return (
        <div className={cl.friendElem}>
            <img className={cl.round} src={img} alt={""} draggable={false}/>
            <div className={cl.textArea}>
                <h1>{chatName}</h1>
                <p><span>{sender}: </span>{lastMessage}</p>
            </div>
        </div>
    );
};

export default FriendElem;