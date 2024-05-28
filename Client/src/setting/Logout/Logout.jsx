import SettingHeading from "../SettingHeading"
import InputField from "../../login/InputField";
import { useContext,useState } from "react";
import {LoginContext} from "../../../globalAttributes.jsx"
import AuthenticationPopup from "../../login/AuthencationPopup.jsx"

export default function Logout() {

    const {setIsLoggedIn} = useContext(LoginContext);

    const [showPopup,setShowPopup] = useState(false);
    const [text,setText] = useState("something went wrong");

    function handleClose(){
        setShowPopup(false);
    }

    async function handleLogout(e){
        e.preventDefault();
        const password = e.target.password.value;

        const res=await fetch("http://localhost:9507/user/logOut",{
            method:"POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({password})
        })
        const data=await res.json();

        if(data.success){
            window.localStorage.removeItem("isDark");
            window.localStorage.removeItem("email");
            setIsLoggedIn(false);
        }
        else{
            setText(data.message);
            setShowPopup(true);
        }
    }

    return (
        < div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col items-center">
            <SettingHeading text="Logout" />
            <div className="mt-11">
                <h1 className="text-2xl text-center font-semibold">Do You Realy Want To Logout??</h1>
            </div>            
            <form onSubmit={handleLogout} className="h-[80%] w-[100%] flex flex-col items-center justify-around">
                <InputField id="password" name="password" type="password" placeHolder="Enter Password" />
                <button type="submit" className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Logout</button>
            </form>
            {showPopup && <button onClick={handleClose} className="absolute z-20 right-0 p-2 rounded-[50%] bg-[color:var(--primary-btn)] flex items-center mr-2 mt-2"><img src="/images/Close-window.svg" alt="close" /></button>}
            {showPopup && <AuthenticationPopup text={text}/>}
        </div>
    )
}