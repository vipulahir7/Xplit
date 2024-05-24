import ExpenseHeading from "../ExpenseHeading.jsx"
import AddExpense from "./AddExpense.jsx"
import ExpenseList from "./ExpenseList.jsx"

export default function Daily(){
    return (
        <div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <ExpenseHeading text="Daily Expenses"/>
            <div className="h-[90%] w-[100%] flex flex-col justify-center">
                <div className="flex flex-col flex-nowrap h-[95%] overflow-x-hidden overflow-y-auto items-center">
                {/* <ExpenseList amount="200" category="food" note="travling with friend" time={Date().toString().split(" ")[4]}/> */}
                </div> 
            </div>
            <AddExpense/>
        </div>
    )
}