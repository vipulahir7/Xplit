import SettingHeading from "../SettingHeading";
import InputField from "../../login/InputField";
import { useState,useContext } from "react";
import AuthenticationPopup from "../../login/AuthencationPopup";
import { EmailContext } from "../../../globalAttributes.jsx";

export default function EmailChange(){

    const {email,setEmail} = useContext(EmailContext);

    const [showPopup,setShowPopup] = useState(false);
    function handleClose(){
        setShowPopup(false);
    }
    
    const [text,setText] = useState("something went wrong");

    const handleEmailChange=async (e)=>{
        e.preventDefault();
        
        const newEmail = e.target.newEmail.value;
        const password = e.target.password.value;

        const data={
            newEmail,
            password,
        }

        if(newEmail === email){
            setText("You are already using this email");
            setShowPopup(true);
        }
        else{

            const res= await fetch("http://localhost:9507/user/changeEmail",{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        const responseData=await res.json();
        if(res.ok){
            const email="old";
            setText(`Email is changed from ${email} to ${newEmail} !`);
            setShowPopup(true);
            setEmail(newEmail);
        }
        else{
            setText(responseData.message);
            setShowPopup(true);
        }

        }
        
    }

    return(
        < div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <SettingHeading text="Change Email" />
            <form onSubmit={handleEmailChange} className="h-[80%] flex flex-col items-center justify-around">
                <InputField id="new-email" name="newEmail" type="email" placeHolder="Enter Email"/>
                <InputField id="password" name="password" type="password" placeHolder="Enter Password"/>
                <button type="submit" className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Change Email</button>
            </form>
            {showPopup && <button onClick={handleClose} className="absolute z-20 right-0 p-2 rounded-[50%] bg-[color:var(--primary-btn)] flex items-center mr-2 mt-2"><img src="/images/Close-window.svg" alt="close" /></button>}
            {showPopup && <AuthenticationPopup text={text}/>}
        </div>
    )
}