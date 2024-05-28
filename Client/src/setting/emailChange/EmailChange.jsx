import SettingHeading from "../SettingHeading";
import InputField from "../../login/InputField";

export default function EmailChange(){
    return(
        < div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <SettingHeading text="Change Email" />
            <form className="h-[80%] flex flex-col items-center justify-around">
                <InputField id="old-email" name="Old Email" type="emil" placeHolder="Enter Email"/>
                <InputField id="new-email" name="New Email" type="email" placeHolder="Enter Email"/>
                <InputField id="password" name="Password" type="password" placeHolder="Enter Password"/>
                <button className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Change Email</button>
            </form>
        </div>
    )
}