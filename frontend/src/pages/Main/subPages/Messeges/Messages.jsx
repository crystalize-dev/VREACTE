import React from 'react';
import cl from "./Messages.module.css";
import Icon from "../../../../components/UI Icon/icon";
import FriendElem from "../../../../components/MainPage/Messages/freindElem/friendElem";



const Messages = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.friendList}>
                <div className={cl.search}>
                    <Icon>search</Icon>
                    <input autoComplete={"on"} placeholder={"Поиск"}/>
                    <Icon>phone_callback</Icon>
                    <Icon>chat_add_on</Icon>
                    <Icon>more_horiz</Icon>
                </div>

                <div className={cl.friends}>
                    <FriendElem/>
                    <FriendElem/>
                    <FriendElem/>
                    <FriendElem/>
                    <FriendElem/>
                    <FriendElem/>
                    <FriendElem/>
                    <FriendElem/>
                    <FriendElem/>
                </div>

                <div className={cl.overFlow}>
                    Показаны все чаты
                </div>
            </div>
            <div className={cl.messageArea}>

            </div>
        </div>
    );
};

export default Messages;