import InputField from "./InputField";
import FormHeading from "./FormHeading";
import Button from "../components/Button.jsx";
import { NavLink,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthenticationPopup from "./AuthencationPopup.jsx";
import { LoginContext } from "../../globalAttributes.jsx";

export default function Form(){

    const {isLoggedIn,setIsLoggedIn} = useContext(LoginContext);

    const [showPopup,setShowPopup] = useState(false);
    const [text,setText] = useState("something went wrong");
    const navigate = useNavigate();

    function handleClose(){
        setShowPopup(false);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let email=e.target.email.value;
        let password=e.target.password.value;

        const data ={
            email,
            password
        }

        const res=await fetch("http://localhost:9507/user/login",{
            method:"POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })

        const responseData=await res.json();
        console.log(responseData);

        if(!res.ok){
            setText(responseData.message);
            setShowPopup(true)
        }
        else{
            setIsLoggedIn(true);
            localStorage.setItem("email",responseData.data.loggedInUser.email);
            navigate('/expense');
        }
    }

    return (
        <div className="bg-[color:var(--nav-bg)] relative h-[70%] rounded-lg w-[28%] flex flex-col items-center drop-shadow-2xl">
                < FormHeading text="Login"/>
                <div className="flex flex-col justify-center w-[100%] h-[85%] flex items-center flex-col gap-2">
                    <form onSubmit={handleSubmit} className="w-[100%] flex justify-between flex-col items-center h-[80%]">
                        <InputField id="userEmail" name="email" type="email" placeHolder="Enter your Email" />
                        <InputField id="userPassword" name="password" type="password" placeHolder="Enter Password" />
                        <button type="submit" className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Login</button>
                    </form>
                    <div>
                        <span>New to Xplit ? </span>
                        <NavLink to="/signup" className={"underline"}>SignUp Now</NavLink>
                    </div>
                </div>
                {showPopup && <button onClick={handleClose} className="absolute z-20 right-0 p-2 rounded-[50%] bg-[color:var(--primary-btn)] flex items-center mr-2 mt-2"><img src="/images/Close-window.svg" alt="close" /></button>}
                {showPopup && <AuthenticationPopup text={text}/>}
        </div>
    )
}