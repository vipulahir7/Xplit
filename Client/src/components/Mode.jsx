import { useState ,useContext} from "react";
import {GlobalContext} from '../../globalAttributes.jsx';

export default function Mode(){

    const { isDark, setIsDark } = useContext(GlobalContext);

    const toggleTheme = () => {
        setIsDark(!isDark);
        window.localStorage.setItem("isDark",!isDark)
    };

    return(
        <button onClick={toggleTheme} className="h-[45%] bg-black-900 outline-0 focus:outline-none hover:scale-[1.1] transition-all ease-in-out active:border-0"><img className="h-[100%]" src={`${isDark? "../../images/Light-mode.svg" : "../../images/Dark-mode.svg"}`} alt="Change mode" /></button>
    )
}