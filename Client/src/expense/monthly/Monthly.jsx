import { useContext, useEffect, useState } from "react";
import MonthDetails from "./MonthDetails.jsx";
import { MonthDiffContext } from "../../../globalAttributes.jsx";
import MonthlyList from "./monthlyList.jsx";

export default function Monthly() {
    const { monthDiff, setMonthDiff } = useContext(MonthDiffContext);
    const [monthlyData, setMonthlyData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            let date = new Date();
            date.setDate(1);
            date.setMonth(new Date().getMonth() + monthDiff);
            
            const res = await fetch("http://localhost:9507/expense/loadDailySum", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ date })
            });

            const data = await res.json();
            setMonthlyData(data);
            console.log(monthlyData)
        };
        loadData();
    }, [monthDiff]);

    // useEffect to observe changes in monthlyData
    useEffect(() => {
        console.log(monthlyData);
    }, [monthlyData]);

    function decrementDiff() {
        setMonthDiff(monthDiff - 1);
    }
    
    function incrementDiff() {
        setMonthDiff(monthDiff + 1);
    }

    return (
        <>
        <div className="h-[100%] w-[26%] bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <div className="flex items-center justify-around w-[100%] h-[10%] bg-[color:var(--header)] rounded-t-lg">
                <button onClick={decrementDiff} className="bg-[color:var(--primary-btn)] drop-shadow-lg rounded-3xl p-2"><img src="/images/Move-left.svg" alt="previous" /></button>
                <h2 className="text-[140%] font-semibold">Monthly Expense</h2>
                <button onClick={incrementDiff} className="bg-[color:var(--primary-btn)] drop-shadow-lg rounded-3xl p-2"><img src="/images/Move-right.svg" alt="next" /></button>
            </div>
            <div className="h-[90%] w-[100%] flex flex-col justify-center">
                <div className="usermessage flex flex-col flex-nowrap h-[95%] overflow-x-hidden overflow-y-auto items-center">
                    {monthlyData.map(data => (
                        <MonthlyList key={data.date} date={new Date(data.date).toISOString().split("T")[0]} amount={data.amount} />
                    ))}
                </div>
            </div>
        </div>
            <MonthDetails />
        </>
    );
}
