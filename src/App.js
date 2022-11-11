import './App.css';
import {useEffect, useState} from "react";
import {AuthContext} from "./context/Authcontext";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    const auth = (remember) => {
        if (remember) localStorage.setItem('auth', 'true');

        setIsAuth(true);
    }
    const disAuth = () => {
        localStorage.removeItem('auth');
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{isAuth, auth, disAuth}}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
