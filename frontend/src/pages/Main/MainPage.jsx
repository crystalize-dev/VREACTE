import React, {useState} from 'react';
import Header from "../../components/header/header";
import cl from "./MainPage.module.css";

const MainPage = () => {
    const [modalProfile, setModalProfile] = useState(false)

    return (
        <div className={cl.wrapper} onMouseDown={() => setModalProfile(false)}>
            <Header modal={modalProfile} setModal={setModalProfile}/>


        </div>
    );
};

export default MainPage;