import Button from "./Button.jsx"
import Logo from "./Logo.jsx"
import Mode from "./Mode.jsx"
import UserEmail from "./UserEmail.jsx"
import {GlobalContext,LoginContext} from '../../globalAttributes.jsx';
import { useContext,useState } from 'react';
import { NavLink } from "react-router-dom";

export default function Header(){

    const { isDark } = useContext(GlobalContext);
    const {isLoggedIn,setIsLoggedIn} = useContext(LoginContext);

    return(
        <header className="bg-[color:var(--header)] flex items-center justify-center w-[100vw] h-[10vh]">
            <div className="flex items-center justify-between w-[80vw] h-[100%]">
                <Logo />
                <div className="flex w-[25vw] justify-start gap-3 h-[100%] items-center">
                    <Mode />
                    {isLoggedIn && <UserEmail />}
                    {!isLoggedIn && <NavLink to="/login"><Button text="Login"/></NavLink>}
                    {!isLoggedIn && <NavLink to="/signup"><Button text="Signup"/></NavLink>}
                </div>
            </div>
        </header>
    )
}