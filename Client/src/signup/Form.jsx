import InputField from "../login/InputField.jsx";
import FormHeading from "../login/FormHeading.jsx";
import Button from "../components/Button.jsx";

export default function Form(){
    return (
        <div className="bg-[color:var(--nav-bg)] h-[85%] rounded-lg w-[28%] flex flex-col items-center">
                < FormHeading text="Sign up"/>
                <div className="w-[100%] h-[85%] flex items-center">
                    <form className="w-[100%] flex justify-between flex-col items-center h-[90%]">
                        <InputField id="userName" name="Name" type="text" placeHolder="Enter your Name" />
                        <InputField id="userEmail" name="Email" type="email" placeHolder="Enter your Email" />
                        <InputField id="userPassword" name="Password" type="password" placeHolder="Enter Password" />
                        <InputField id="confirmPassword" name="confirmPassword" type="password" placeHolder="Confirm Password" />
                        <Button text="Sign up"/>
                    </form>
                </div>
        </div>
    )
}