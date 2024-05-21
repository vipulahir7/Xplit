import Button from "./Button.jsx"
import Logo from "./Logo.jsx"

export default function Header(){
    return(
        <header className="flex bg-[#1F2937] items-center justify-center w-[100vw] h-[10vh]" >
            <div className="flex items-center justify-between w-[80vw]">
                <Logo />
                <div className="flex w-[10vw] justify-between">
                    <Button text="Login"/>
                    <Button text="Signup"/>
                </div>
            </div>
        </header>
    )
}