import ExpenseHeading from "../ExpenseHeading"
import ExpenseList from "./ExpenseList"

export default function Daily(){
    return (
        <div className="h-[100%] w-[30%] bg-[color:var(--nav-bg)] rounded-lg">
            <ExpenseHeading text="Daily Expenses"/>
            <div className="flex flex-col flex-nowrap h-[90%] overflow-x-hidden overflow-y-auto w-[100%] items-center">
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
                <ExpenseList icon="" note="travel" amount="20"/>
            </div> 
        </div>
    )
}