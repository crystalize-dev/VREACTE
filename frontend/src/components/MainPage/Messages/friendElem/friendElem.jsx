import React, {useContext} from 'react';
import cl from "./friendElem.module.css";
import lightImg from "../../../../img/profile.jpeg";
import darkImg from "../../../../img/profileDark.png";
import {ThemeContext} from "../../../../context/ThemeContext";

const FriendElem = ({img, sender = "Кто",
                    lastMessage="Последнее длинное сообщение с троеточием :)",
                    chatName="Название чата",
                    onClick}) =>
{
    const {theme} = useContext(ThemeContext);

    if (img === null) {
        theme === "light" ? img = lightImg : img = darkImg;
    }

    return (
        <div className={cl.friendElem} onClick={onClick}>
            <img className={cl.round} src={img} alt={""} draggable={false}/>
            <div className={cl.textArea}>
                <h1>{chatName}</h1>
                <p>{sender}: <span>{lastMessage}</span></p>
            </div>
        </div>
    );
};

export default FriendElem;