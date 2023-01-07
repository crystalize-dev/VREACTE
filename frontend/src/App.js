import {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";

import {AuthContext} from "./context/authContext";
import {ThemeContext} from "./context/ThemeContext";

import './App.css';

function App() {
    const root = document.getElementById('root');
    const [isAuth, setIsAuth] = useState(false);
    const [theme, setTheme] = useState("");

    const auth = (remember) => {
        if (remember) localStorage.setItem('auth', 'true');

        setIsAuth(true);
    }
    const disAuth = () => {
        localStorage.removeItem('auth');
        setIsAuth(false);
    }

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
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }

        if (localStorage.getItem('theme')) {
            setTheme(localStorage.getItem('theme'))
        }
    }, [])

    useEffect(() => {
        root.setAttribute('data-theme', theme)
    }, [root, theme])

    return (
        <AuthContext.Provider value={{isAuth, auth, disAuth}}>
                <ThemeContext.Provider value={{theme, switchTheme}}>
                    <BrowserRouter>
                        <div className={isAuth === true ? "mainWrapper minWidth" : "mainWrapper"}>
                            <AppRouter/>
                        </div>
                    </BrowserRouter>
                </ThemeContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
