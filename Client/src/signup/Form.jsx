import InputField from "../login/InputField.jsx";
import FormHeading from "../login/FormHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import AuthenticationPopup from "../login/AuthencationPopup.jsx";
import { useNavigate } from 'react-router-dom';
import { LoginContext } from "../../globalAttributes.jsx";

export default function Form(){

    const [showPopup,setShowPopup] = useState(false);
    const [text,setText] = useState("something went wrong");
    const navigate = useNavigate();

    function handleClose(){
        setShowPopup(false);
    }

const handleSubmit =async (e)=>{
    e.preventDefault();
    let name = e.target.name.value
    let email = e.target.email.value
    let password = e.target.password.value
    let confirmPassword = e.target.confirmPassword.value

    if(password.length < 8){
        setText("Password should contain atleast 8 characters !");
        setShowPopup(true)
    }
    else if(password != confirmPassword){
        setText("Password does not match !");
        setShowPopup(true)
    }
    else{
        const data = {
            name,
            email,
            password
        };
        
        const res = await fetch("http://localhost:9507/user/signup",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })

        const responseData=await res.json();

        if(!res.ok){
            setText(responseData.message);
            setShowPopup(true)
        }
        else{
            navigate('/login');
        }
    }
}

    return (
        <div className="bg-[color:var(--nav-bg)] h-[90%] relative rounded-lg w-[28%] flex flex-col items-center drop-shadow-2xl">
                < FormHeading text="Sign up"/>
                <div className="w-[100%] h-[85%] flex items-center flex-col">
                    <form onSubmit={handleSubmit} className="w-[100%] flex justify-between flex-col items-center h-[90%]">
                        <InputField id="userName" name="name" type="text" placeHolder="Enter your Name" />
                        <InputField id="userEmail" name="email" type="email" placeHolder="Enter your Email" />
                        <InputField id="userPassword" name="password" type="password" placeHolder="Enter Password" />
                        <InputField id="confirmPassword" name="confirmPassword" type="password" placeHolder="Confirm Password" />
                        <button type="submit" className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Sign Up</button>
                    </form>
                    <div>
                        <span>Already have an account ? </span>
                        <NavLink to="/login" className={"underline"}>Login Now</NavLink>
                    </div>
                </div>
                {showPopup && <button onClick={handleClose} className="absolute z-20 right-0 p-2 rounded-[50%] bg-[color:var(--primary-btn)] flex items-center mr-2 mt-2"><img src="/images/Close-window.svg" alt="close" /></button>}
                {showPopup && <AuthenticationPopup text={text}/>}
        </div>
    )
}