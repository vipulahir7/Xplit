import InputField from "./InputField";
import FormHeading from "./FormHeading";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";


export default function Form(){
    return (
        <div className="bg-[color:var(--nav-bg)] h-[70%] rounded-lg w-[28%] flex flex-col items-center drop-shadow-2xl">
                < FormHeading text="Login"/>
                <div className="flex flex-col justify-center w-[100%] h-[85%] flex items-center">
                    <form className="w-[100%]  flex justify-between flex-col items-center h-[80%]">
                        <InputField id="userEmail" name="Email" type="email" placeHolder="Enter your Email" />
                        <InputField id="userPassword" name="Password" type="password" placeHolder="Enter Password" />
                        <Button text="Login"/>
                        <div>
                            <span>New to Xplit ? </span>
                            <NavLink to="/signup" className={"underline"}>SignUp Now</NavLink>
                        </div>
                    </form>
                </div>
        </div>
    )
}