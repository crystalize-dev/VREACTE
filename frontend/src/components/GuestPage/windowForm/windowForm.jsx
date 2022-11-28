import React from 'react';
import vkBlack from "../../../img/vkBlack.png";
import BackArrow from "../../UI/backArrow/backArrow";

import cl from "./windowForm.module.css";


const WindowForm = ({onSubmit, backArrow=false, children}) => {
    return (
        <form className={cl.wrapper} onSubmit={onSubmit}>
            <div className={cl.window}>
                {backArrow &&
                    <BackArrow className={cl.backArrow}/>
                }

                <img alt="logo" src={vkBlack}/>

                {children}
            </div>
        </form>
    );
};

export default WindowForm;