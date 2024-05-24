import InputField from "../login/InputField.jsx";
import FormHeading from "../login/FormHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";

export default function Form(){

const handleSubmit =async (e)=>{
    e.preventDefault();
    let name = e.target.name.value
    let email = e.target.email.value
    let password = e.target.password.value
    let confirmPassword = e.target.confirmPassword.value

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
    console.log(res);
}

    return (
        <div className="bg-[color:var(--nav-bg)] h-[90%] rounded-lg w-[28%] flex flex-col items-center drop-shadow-2xl">
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
        </div>
    )
}