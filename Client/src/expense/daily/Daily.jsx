import { useState } from "react"
import ExpenseHeading from "../ExpenseHeading.jsx"
import ExpenseList from "./ExpenseList.jsx"
import addExpense from "./AddExpense.jsx"
import AddExpense from "./AddExpense.jsx"

export default function Daily(){
    
    const [addExpense,setAddExpense]=useState(false)

    function addListClicked(){
        setAddExpense(!addExpense)
    }

    return (
        <div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <ExpenseHeading text="Daily Expenses"/>
            <div className="h-[90%] w-[100%] flex flex-col justify-center">
                <div className="flex flex-col flex-nowrap h-[95%] overflow-x-hidden overflow-y-auto items-center">
                    <ExpenseList icon="" category="travel" note="traveling with my friend" amount="20"/>
                    <ExpenseList icon="" category="food" note="traveling w" amount="20"/>
                    <ExpenseList icon="" category="shop" note="" amount="20"/>
                    <ExpenseList icon="" category="food" note="flex flex-col flex-nowrap h-[90%] overflow-x-hidden overflo" amount="20"/>
                    <ExpenseList icon="" category="food" note="fl" amount="20"/>
                    <ExpenseList icon="" category="food" note="flex-hidden overflo" amount="20"/>
                    <ExpenseList icon="" category="food" note="flex flex-col flex-nowrap h-[90%] overflow-x-hidden overflo" amount="20"/>
                </div> 

            </div>
            <button onClick={addListClicked} className="absolute right-10 bottom-5 drop-shadow-lg h-[55px] w-[55px] flex items-center justify-center rounded-3xl bg-[color:var(--primary-btn)]"><img src="/images/Add-list.svg" alt="Add List" /></button>
            {addExpense && <AddExpense/>}
        </div>
    )
}