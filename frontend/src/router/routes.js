import MainPage from "../pages/Main/MainPage";

import LoginPage from "../pages/Guest/Login/LoginPage";
import ForgotPassword from "../pages/Guest/ForgotPassword/ForgotPassword";
import Register from "../pages/Guest/Register/Register";


export const privateRoutes = [
    {path: '*', element: <MainPage/>}
]

export const publicRoutes = [
    {path: '*', element: <LoginPage/>},
    {path: '/forgot', element: <ForgotPassword/>},
    {path: '/register', element: <Register/>}
]