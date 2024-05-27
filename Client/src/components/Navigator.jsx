import NavigatorButton from "./NavigatorButton.jsx"
import {GlobalContext,LoginContext} from '../../globalAttributes.jsx';

import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function Navigator(){

    const { isDark } = useContext(GlobalContext);
    const {isLoggedIn} = useContext(LoginContext);

    return (
        <nav className="bg-[color:var(--primary-bg)] w-[100vw] h-[10vh] flex justify-center">
            <div className={`${isLoggedIn ? "" : "hidden"} bg-[color:var(--nav-bg)] w-[21vw] h-[8vh] rounded-lg flex justify-evenly items-center drop-shadow-xl`}>
                <div className="w-[33%] h-[100%] flex items-center justify-center">
                    <NavLink to="/expense" className={({isActive}) => `${isActive ? "h-[100%] opacity-100": " opacity-40 h-[70%]"} transition-all ease-linear flex justify-center`}>
                        <NavigatorButton src={`${isDark ? "../../images/expense-white.svg" : "../../images/expense-black.svg"}`} alt="expense"/>
                    </NavLink>
                </div>
                <div className="w-[33%] h-[100%] flex items-center justify-center">
                    <NavLink to="/transaction" className={({isActive}) => `${isActive ? "h-[100%] opacity-100": " opacity-40 h-[70%]"} transition-all ease-linear flex justify-center`}>
                        <NavigatorButton  src={`${isDark ? "../../images/transact-white.svg" : "../../images/transact-black.svg"}`} alt="transaction"/>
                    </NavLink>
                </div>
                <div className="w-[33%] h-[100%] flex items-center justify-center">
                    <NavLink to="/setting" className={({isActive}) => `${isActive ? "h-[100%] opacity-100": " opacity-40 h-[70%]"} transition-all ease-linear flex justify-center`}>
                        <NavigatorButton src={`${isDark ? "../../images/setting-white.svg": "../../images/setting-black.svg"}`} alt="setting"/>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}