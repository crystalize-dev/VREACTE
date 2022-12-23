import React, {useContext} from 'react';
import {ThemeContext} from "../../../context/ThemeContext";
import vkBlack from "../../../img/vkBlack.png";
import vk from "../../../img/vk.png";
import BackArrow from "../../UI/backArrow/backArrow";

import cl from "./windowForm.module.css";
import ThemeSwitcher from "../../UI/themeSwitcher/themeSwitcher";


const WindowForm = ({onSubmit, backArrow=false, children}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <form className={cl.wrapper} onSubmit={onSubmit}>
            <div className={cl.window}>
                {backArrow &&
                    <BackArrow className={cl.backArrow}/>
                }

                <img alt="logo" src={theme === "dark" ? vk : vkBlack}/>

                {children}

                <ThemeSwitcher className={cl.switcher}/>
            </div>
        </form>
    );
};

export default WindowForm;