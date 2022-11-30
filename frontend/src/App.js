import {useEffect, useState} from "react";
import {AuthContext} from "./context/authContext";
import {UserContext} from "./context/userContext";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";

import './App.css';


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [userData, setUserData] = useState(null);


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
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, auth, disAuth}}>
            <UserContext.Provider value={{userData, setUserData}}>
                <BrowserRouter>
                    <div className={isAuth === true ? "mainWrapper minWidth" : "mainWrapper"}>
                        <AppRouter/>
                    </div>
                </BrowserRouter>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
