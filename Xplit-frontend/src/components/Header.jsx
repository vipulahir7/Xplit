import Button from "./Button.jsx"
import Logo from "./Logo.jsx"
import Mode from "./Mode.jsx"
import GlobalContext from '../../globalAttributes.jsx';
import { useContext } from 'react';

export default function Header(){

    const { isDark } = useContext(GlobalContext);

    return(
        <header className="bg-[color:var(--header)] flex items-center justify-center w-[100vw] h-[10vh]">
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