import { useEffect, useState } from "react";
import YearDetails from "./YearDetails.jsx"
import MonthlyList from "../monthly/monthlyList.jsx"

export default function Monthly() {
    const [yearlyData, setYearlyData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            
            let date = new Date();
            date.setMonth(0);
            date.setDate(1);
            console.log(date);
            const year = date.getFullYear();
            const newData = [];

            while (date.getFullYear() === year) {
                const res = await fetch("http://localhost:9507/expense/getMonthlySum", {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ date })
                });
                const data = await res.json();
                newData.push({ date: new Date(date), amount: data.data.amount });
                date.setMonth(date.getMonth() + 1);
            }
            setYearlyData(newData);
        };
        loadData();
    }, []);

    return (
        <div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <div className="flex items-center justify-around w-[100%] h-[10%] bg-[color:var(--header)] rounded-t-lg">
                <h2 className="text-[140%] font-semibold">Yearly Expense</h2>
            </div>

            <div className="h-[90%] w-[100%] flex flex-col justify-center">
                <div className="flex flex-col flex-nowrap h-[95%] overflow-x-hidden overflow-y-auto items-center">
                    {yearlyData.map(data => (
                        <MonthlyList key={data.date.toISOString()} date={data.date.toISOString().split("T")[0].split("-")[0] +"-"+ data.date.toISOString().split("T")[0].split("-")[1]} amount={data.amount} />
                    ))}
                </div>
            </div>
            <YearDetails />
        </div>
    );
}