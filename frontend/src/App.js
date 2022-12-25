import {useEffect, useState} from "react";
import {AuthContext} from "./context/authContext";
import {UserContext} from "./context/userContext";
import {ThemeContext} from "./context/ThemeContext";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";

import './App.css';

function App() {
    const root = document.getElementById('root')
    const [isAuth, setIsAuth] = useState(false);
    const [userData, setUserData] = useState(null);
    const [theme, setTheme] = useState("");


    const auth = (remember) => {
        if (remember) localStorage.setItem('auth', 'true');

        setIsAuth(true);
    }
    const disAuth = () => {
        localStorage.removeItem('auth');
        setIsAuth(false);
    }

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }

        if (localStorage.getItem('theme')) {
            setTheme(localStorage.getItem('theme'))
        }
    }, [])

    const switchTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem('theme', 'dark')
        }
        else {
            setTheme("light")
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        root.setAttribute('data-theme', theme)
    }, [root, theme])

    return (
        <AuthContext.Provider value={{isAuth, auth, disAuth}}>
            <UserContext.Provider value={{userData, setUserData}}>
                <ThemeContext.Provider value={{theme, switchTheme}}>
                    <BrowserRouter>
                        <div className={isAuth === true ? "mainWrapper minWidth" : "mainWrapper"}>
                            <AppRouter/>
                        </div>
                    </BrowserRouter>
                </ThemeContext.Provider>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
