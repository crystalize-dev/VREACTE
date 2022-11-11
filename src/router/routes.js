import MainPage from "../pages/main/MainPage";
import LoginPage from "../pages/login/LoginPage";

export const privateRoutes = [
    {path: '*', element: <MainPage/>}
]

export const publicRoutes = [
    {path: '*', element: <LoginPage/>}
]