import { useContext } from "react";
import ExpenseHeading from "../ExpenseHeading.jsx";
import MonthDetails from "./MonthDetails.jsx";
import { MonthDiffContext } from "../../../globalAttributes.jsx";

export default function Monthly(){

    const {monthDiff,setMonthDiff} = useContext(MonthDiffContext);

    function decrementDiff(){
        setMonthDiff(monthDiff-1);
    }
    function incrementDiff(){
        setMonthDiff(monthDiff+1);
    }

    return (
        <div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <div className="flex items-center justify-around w-[100%] h-[10%] bg-[color:var(--header)] rounded-t-lg">
                <button onClick={decrementDiff} className="bg-[color:var(--primary-btn)] drop-shadow-lg rounded-3xl p-2"><img src="/images/Move-left.svg" alt="previous" /></button>
                    <h2 className="text-[140%] font-semibold">Monthly Expense</h2>
                <button onClick={incrementDiff} className="bg-[color:var(--primary-btn)] drop-shadow-lg rounded-3xl p-2"><img src="/images/Move-right.svg" alt="next" /></button>
            </div>
            <MonthDetails/>
        </div>
    )
}