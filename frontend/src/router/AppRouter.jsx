import React, {useContext} from 'react';
import {AuthContext} from "../context/authContext";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <Routes>
                {isAuth
                    ? privateRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={route.element}/>)
                    : publicRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={route.element}/>)
                }
            </Routes>
        </>
    );
};

export default AppRouter;