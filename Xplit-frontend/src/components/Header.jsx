import Button from "./Button.jsx"
import Logo from "./Logo.jsx"
import Mode from "./Mode.jsx"
import GlobalContext from '../../globalAttributes.jsx';
import { useContext } from 'react';

export default function Header(){

    const { isDark } = useContext(GlobalContext);

    return(
        <header className={`flex ${isDark? "bg-[#1F2937] text-white" : "bg-[#d0d0d0] text-black"} items-center justify-center w-[100vw] h-[10vh]`} >
            <div className="flex items-center justify-between w-[80vw] h-[100%]">
                <Logo />
                <div className="flex w-[15vw] justify-between h-[100%] items-center">
                    <Mode />
                    <Button text="Login"/>
                    <Button text="Signup"/>
                </div>
            </div>
        </header>
    )
}