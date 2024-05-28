import SettingHeading from "../SettingHeading"
import InputField from "../../login/InputField";

export default function Logout() {
    return (
        < div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col items-center">
            <SettingHeading text="Logout" />
            <div className="mt-11">
                <h1 className="text-2xl text-center font-semibold">Do You Realy Want To Logout??</h1>
            </div>            
            <form className="h-[80%] w-[100%] flex flex-col items-center justify-around">
                <InputField id="password" name="password" type="password" placeHolder="Enter Password" />
                <button className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Logout</button>
            </form>
        </div>
    )
}