import MainPage from "../pages/Main/MainPage";

import LoginPage from "../pages/Guest/Login/LoginPage";
import ForgotPassword from "../pages/Guest/ForgotPassword/ForgotPassword";
import Register from "../pages/Guest/Register/Register";


export const privateRoutes = [
    {path: '/*', element: <MainPage/>},
]

export const publicRoutes = [
    {path: '*', element: <LoginPage/>},
    {path: '/forgot', element: <ForgotPassword/>},
    {path: '/register', element: <Register/>},
]

export const subRoutes = [
    {path: '/me', element: <div/>},
    {path: '/news', element: <div/>},
    {path: '/messages', element: <div/>},
    {path: '/friends', element: <div/>},
    {path: '/groups', element: <div/>},
    {path: '/photos', element: <div/>},
    {path: '/music', element: <div/>},
    {path: '/video', element: <div/>},
    {path: '/files', element: <div/>},
]