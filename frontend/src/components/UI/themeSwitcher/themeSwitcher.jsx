import React, {useContext} from 'react';
import cl from "./themeSwitcher.module.css";
import classNames from "classnames";
import {ThemeContext} from "../../../context/ThemeContext";
import Icon from "../../Icon/icon";


const ThemeSwitcher = ({className}) => {
    const {theme, switchTheme} = useContext(ThemeContext)

    return (
        <div className={classNames(cl.wrapper, className)} onClick={() => switchTheme()}>
            <Icon>{theme === "light" ? "light_mode" : "dark_mode"}</Icon>
        </div>
    );
};

export default ThemeSwitcher;