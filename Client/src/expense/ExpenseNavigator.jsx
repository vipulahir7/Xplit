import ExpenseNavigatorButtons from "./ExpenseNavigatorButtons"
import {NavLink} from "react-router-dom"
export default function ExpenseNavigator(){
    return (
        <div className="h-[21vh] w-[10vw] flex flex-col justify-between mr-4 gap-2">
            <NavLink to="/expense/daily" className={({isActive})=> `${isActive ? "scale-105" : "scale-100"} h-[32%]`}>
                <ExpenseNavigatorButtons text="Daily"/>
            </NavLink>
            <NavLink to="/expense/monthly" className={({isActive})=> `${isActive ? "scale-105" : "scale-100"} h-[32%]`}>
                <ExpenseNavigatorButtons text="Monthly"/>
            </NavLink>
            <NavLink to="/expense/yearly" className={({isActive})=> `${isActive ? "scale-105" : "scale-100"} h-[32%]`}>
                <ExpenseNavigatorButtons text="Yearly"/>
            </NavLink>
        </div>
    )
}