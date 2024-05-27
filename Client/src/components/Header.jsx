import Button from "./Button.jsx"
import Logo from "./Logo.jsx"
import Mode from "./Mode.jsx"
import GlobalContext from '../../globalAttributes.jsx';
import { useContext,useState } from 'react';
import { NavLink } from "react-router-dom";

export default function Header(){

    const { isDark } = useContext(GlobalContext);
    const [isLoggedIn,setIsLoggedin]=useState(false);
    let user;

    (async function checkLoggedIn(){
        const res=await fetch("http://localhost:9507/user/getUser",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:""
        })
        console.log(res,"in header");

        if(res.ok){
            setIsLoggedin(true);
        }
        console.log(res.data);
    })()


    return(
        <header className="bg-[color:var(--header)] flex items-center justify-center w-[100vw] h-[10vh]">
            <div className="flex items-center justify-between w-[80vw] h-[100%]">
                <Logo />
                <div className="flex w-[15vw] justify-between h-[100%] items-center">
                    <Mode /> 
                    <NavLink to="/login"><Button text="Login"/></NavLink>
                    <NavLink to="/signup"><Button text="Signup"/></NavLink>
                </div>
            </div>
        </header>
    )
}