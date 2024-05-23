import ExpenseNavigatorButtons from "./ExpenseNavigatorButtons"
import {Link} from "react-router-dom"
export default function ExpenseNavigator(){
    return (
        <div className="h-[21vh] w-[10vw] flex flex-col justify-between mr-4">
            <Link to="/expense/daily" className="h-[32%]">
                <ExpenseNavigatorButtons text="Daily"/>
            </Link>
            <Link to="/expense/monthly" className="h-[32%]">
                <ExpenseNavigatorButtons text="Monthly"/>
            </Link>
            <Link to="/expense/yearly" className="h-[32%]">
                <ExpenseNavigatorButtons text="Yearly"/>
            </Link>
        </div>
    )
}