import { Outlet } from "react-router-dom"
import SettingNavigator from "./SettingNavigator";

export default function Setting(){
    return (
        <div className="h-[80vh] bg-[color:var(--primary-bg)] flex justify-center items-center ">
            <div className="h-[70vh] flex w-[100%] justify-center drop-shadow-lg">
                <SettingNavigator />
                <Outlet />
            </div>
        </div>
    )
}