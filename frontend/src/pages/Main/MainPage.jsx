import React, {useContext, useEffect, useState} from 'react';
import Header from "../../components/MainPage/header/header";

import cl from "./MainPage.module.css";
import SideBar from "../../components/MainPage/sideBar/sideBar";
import {Route, Routes} from "react-router-dom";
import {subRoutes} from "../../router/routes";
import {UserContext} from "../../context/userContext";



const MainPage = () => {
    const [modalProfile, setModalProfile] = useState(false)
    const {setUserData: changeUserData} = useContext(UserContext)

    useEffect(() => {
        changeUserData(localStorage.getItem('fullName'))
    }, [])

    return (
        <div className={cl.wrapper} onMouseDown={() => setModalProfile(false)}>
            <Header modal={modalProfile} setModal={setModalProfile}/>
            <SideBar/>

            <Routes>
                {
                    subRoutes.map(route =>
                        <Route key={route.path} element={route.element} path={route.path}/>)
                }
            </Routes>
        </div>
    );
};

export default MainPage;