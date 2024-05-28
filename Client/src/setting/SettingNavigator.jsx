import ExpenseNavigatorButtons from "../expense/ExpenseNavigatorButtons"
import {NavLink} from "react-router-dom"
export default function ExpenseNavigator(){
    return (
        <div className="h-[21vh] w-[10vw] flex flex-col gap-2 justify-between mr-4">
            <NavLink to="/setting/change-password" className={({isActive}) => `${isActive ? "scale-105" : "scale-100"} h-[32%]`}>
                <ExpenseNavigatorButtons text="change password"/>
            </NavLink>
            <NavLink to="/setting/change-email" className={({isActive}) => `${isActive ? "scale-105" : "scale-100"} h-[32%]`}>
                <ExpenseNavigatorButtons text="change email"/>
            </NavLink>
            <NavLink to="/setting/logout" className={({isActive}) => `${isActive ? "scale-105" : "scale-100"} h-[32%]`}>
                <ExpenseNavigatorButtons text="logout"/>
            </NavLink>
        </div>
    )
}
