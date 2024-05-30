import { useContext,useState,useEffect } from "react"
import { MonthDiffContext,expenseListContext } from "../../../globalAttributes"

export default function MonthDetails(){
    const {monthDiff,setMonthDiff} = useContext(MonthDiffContext);
    const {expenseList} = useContext(expenseListContext);
    const [monthlySum,setMonthlySum] = useState(0);

    const date = new Date()
    date.setDate(1);
    date.setMonth(new Date().getMonth()+monthDiff)

    useEffect( () => {
        const loadData = async ()=>{
            const res=await fetch("http://localhost:9507/expense/getMonthlySum",{
                method:"POST",
                credentials:'include',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({date})
            });
            const data = await res.json();
            setMonthlySum(data.data.amount);
        }
        loadData();
    },[monthDiff,expenseList])

    let dateString = date.toISOString().split("T")[0];
    dateString = dateString.split("-")[1] +"-" + dateString.split("-")[0];
    return (
        <div className="drop-shadow-lg rounded-md z-10 gap-2 justify-center bg-[color:var(--nav-bg)] flex flex-col items-center h-[30%] self-start ml-2 w-[300px] bg-[color:var(--nav-bg)] rounded-md">
            <span className="text-2xl">{dateString}</span>
            <span className="text-2xl">Total : {monthlySum}</span>
            <button onClick={()=>setMonthDiff(0)} className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Today</button>
        </div>
    )
}