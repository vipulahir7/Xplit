import InputField from "../../login/InputField";
import SettingHeading from "../SettingHeading";

export default function PasswordChange(){
    return(
        < div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <SettingHeading text="Change Password" />
            <form className="h-[80%] flex flex-col items-center justify-around">
                <InputField id="old-password" name="Old Password" type="password" placeHolder="Enter Password"/>
                <InputField id="new-password" name="New Password" type="password" placeHolder="Enter Password"/>
                <InputField id="confirm-password" name="Confirm Password" type="password" placeHolder="Enter Password"/>
                <button className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Change Password</button>
            </form>
        </div>
    )
}