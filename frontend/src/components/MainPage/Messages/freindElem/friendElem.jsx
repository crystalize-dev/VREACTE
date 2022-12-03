import React from 'react';
import cl from "./friendElem.module.css";
import defaultImg from "../../../../img/profile.jpeg"

const FriendElem = ({img = defaultImg,
                    sender = "Отправтель",
                    lastMessage="Последнее сообщение",
                    chatName="Название чата"}) => {


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