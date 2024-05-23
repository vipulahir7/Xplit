import { Outlet } from "react-router-dom";
import ExpenseNavigator from "./ExpenseNavigator";
import Daily from "./daily/Daily";
import AddExpense from "./daily/AddExpense";

export default function Expense(){
    
    return (
        <div className="h-[80vh] bg-[color:var(--primary-bg)] flex justify-center items-center">
            <div className="h-[70vh] flex w-[100%] justify-center">
                <ExpenseNavigator/>
                <Outlet/>
                <AddExpense />
            </div>
        </div>
    )
}