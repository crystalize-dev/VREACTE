import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {subRoutes} from "../../router/routes";

import SideBar from "../../components/MainPage/sideBar/sideBar";
import Header from "../../components/MainPage/header/header";

import cl from "./MainPage.module.css";


const MainPage = () => {
    const [modalProfile, setModalProfile] = useState(false)

    return (
        <div className={cl.wrapper} onMouseDown={() => setModalProfile(false)}>
            <Header modal={modalProfile} setModal={setModalProfile}/>
            <SideBar/>
            <div className={cl.contentWrapper}>
                <Routes>
                    {
                        subRoutes.map(route =>
                            <Route key={route.path} element={route.element} path={route.path}/>)
                    }
                </Routes>
            </div>
        </div>
    );
};

export default MainPage;