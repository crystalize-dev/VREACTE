import React, {useState} from 'react';
import cl from "./Messages.module.css";
import Icon from "../../../../components/Icon/icon";
import FriendElem from "../../../../components/MainPage/Messages/friendElem/friendElem";
import {friends} from "../../../../hardcode/friends";
import noAvatar from "../../../../img/profile.jpeg";
import TextareaAutosize from 'react-textarea-autosize';


const Messages = () => {
    const [active, setActive] = useState(null)
    const [friendList, setFriendList] = useState(friends)

    const [text, setText] = useState("")

    const changeActive = (friend) => {
        setActive(friend)
    }

    const sendMessage = (e) => {


        setFriendList(friendList.map(friend => {
            if (friend.name !== active.name) return friend

            friend.messages.push({who: "я", message: text})

            return friend
        }))

        setText("")

        e.preventDefault()
    }

    const checkForEnter = (e) => {
        const code = e.keyCode || e.which;
        const activeEl = document.activeElement.id;

        if ((code === 13) && (e.ctrlKey) && (activeEl === "text_area")) {
            setText(text + "\n");
        } else if ((code === 13) && (activeEl === "text_area")) {
            let text_redirect = text;

            text_redirect = text_redirect.replace(/^\s+/, "");

            if (text_redirect !== "") {
                sendMessage(e);
            } else {
                e.preventDefault()
            }
        }
    }

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
                    {
                        friendList.map(friend => <FriendElem key={friend.name}
                                                             sender={friend.messages[friend.messages.length - 1].who}
                                                             chatName={friend.name}
                                                             lastMessage={friend.messages[friend.messages.length - 1].message}
                                                             img={friend.img}
                                                             active={active} setActive={setActive}
                                                             onClick={() => changeActive(friend)}/>)
                    }
                </div>

                <div className={cl.overFlow}>
                    Показаны все чаты
                </div>
            </div>

            <div className={cl.messageArea}>
                {active === null ?
                    <div className={cl.noChoice}>
                        <Icon>forum</Icon>
                        <p>Выберите чат</p>
                    </div>
                    :
                    <div className={cl.messageContainer}>
                        <div className={cl.messageHeader}>
                            <p>{active.name}</p>
                            <div className={cl.headerBtnsArea}>
                                <Icon>call</Icon>
                                <Icon>search</Icon>
                                <Icon>more_horiz</Icon>
                                <img className={cl.roundAvatar} src={active.img === null ? noAvatar : active.img}
                                     alt={""}/>
                            </div>
                        </div>

                        <div className={cl.mainMsgArea}>
                            {
                                active.messages.map(message =>
                                    <div key={message.message} className={cl.messageWrapper}>
                                        <Icon>check_circle</Icon>
                                        <img
                                            src={message.who === "я" || active.img === null ? noAvatar : active.img}
                                            alt={""}/>
                                        <div className={cl.messageContent}>
                                            <h1>{message.who === "я" ? localStorage.getItem("fullName") : message.who}</h1>
                                            <p>{message.message}</p>
                                        </div>
                                        <Icon>reply</Icon>
                                        <Icon>star</Icon>
                                    </div>)
                            }
                        </div>

                        <div className={cl.inputArea}>
                            <Icon>attach_file</Icon>
                            <div className={cl.inputWrapper}>
                                <TextareaAutosize
                                    value={text} onChange={(e) => setText(e.target.value)}
                                    placeholder={"Напишите сообщение..."}
                                    onKeyDown={(e) => checkForEnter(e)} id={"text_area"} autoFocus/>

                                <Icon>photo_camera</Icon>
                                <Icon>sentiment_satisfied</Icon>
                            </div>
                            <Icon
                                onClick={text === "" ? null : () => sendMessage()}>{text === "" ? "mic" : "send"}</Icon>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Messages;