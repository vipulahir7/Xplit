import InputField from "../../login/InputField";
import SettingHeading from "../SettingHeading";
import AuthenticationPopup from "../../login/AuthencationPopup";
import { useState } from "react";

export default function PasswordChange(){

    function handleClose(){
        setShowPopup(false);
    }

    const [showPopup,setShowPopup] = useState(false);
    const [text,setText] = useState("something went wrong");

    const handlePasswordChange=async (e)=>{
        e.preventDefault();
        
        const oldPassword = e.target.oldPassword.value;
        const newPassword = e.target.newPassword.value;
        const confirmPassword = e.target.confirmPassword.value; 

        if(newPassword.length < 8){
            setShowPopup(true);
            setText("Password must be at least 8 characters");
        }
        else if(newPassword != confirmPassword){
            setShowPopup(true);
            setText("Passwords do not match");
        }
        else{
            const data={
                password:oldPassword,
                newPassword,
            }
    
            const res= await fetch("http://localhost:9507/user/changePassword",{
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            const responseData=await res.json();
        
            setText(responseData.message);
            setShowPopup(true);
        }
    }

    return(
        < div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <SettingHeading text="Change Password" />
            <form onSubmit={handlePasswordChange} className="h-[80%] flex flex-col items-center justify-around">
                <InputField id="old-password" name="oldPassword" type="password" placeHolder="Enter Password"/>
                <InputField id="new-password" name="newPassword" type="password" placeHolder="Enter Password"/>
                <InputField id="confirm-password" name="confirmPassword" type="password" placeHolder="Enter Password"/>
                <button type="submit" className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Change Password</button>
            </form>
            {showPopup && <button onClick={handleClose} className="absolute z-20 right-0 p-2 rounded-[50%] bg-[color:var(--primary-btn)] flex items-center mr-2 mt-2"><img src="/images/Close-window.svg" alt="close" /></button>}
            {showPopup && <AuthenticationPopup text={text}/>}
        </div>
    )
}