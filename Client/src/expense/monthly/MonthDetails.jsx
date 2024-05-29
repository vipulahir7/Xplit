import { useContext,useState,useEffect } from "react"
import { MonthDiffContext,expenseListContext } from "../../../globalAttributes"

export default function MonthDetails(){
    const {monthDiff,setMonthDiff} = useContext(MonthDiffContext);
    const {expenseList} = useContext(expenseListContext);
    const [monthlySum,setMonthlySum] = useState(0);

    useEffect( () => {
        const loadData = async ()=>{
            const res=await fetch("http://localhost:9507/expense/getMonthlySum",{
                method:"POST",
                credentials:'include',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({date:new Date().setMonth(new Date().getMonth()+monthDiff)})
            });
            const data = await res.json();
            setMonthlySum(data.data.amount);
        }
        loadData();
    },[monthDiff,expenseList])

    var newDate = new Date();
    newDate.setMonth(newDate.getMonth() + monthDiff);
    let dateString = newDate.toISOString().split("T")[0];
    dateString = dateString.split("-")[1] +"-" + dateString.split("-")[0];
    return (
        <div className="drop-shadow-lg rounded-md z-10 gap-2 bg-[color:var(--nav-bg)] absolute flex flex-col items-center right-[-310px] top-0 h-[30%] self-end ml-2 align-bottom w-[300px] bg-[color:var(--nav-bg)] rounded-md">
            <span className="text-2xl">{dateString}</span>
            <span className="text-2xl">Total : {monthlySum}</span>
            <button onClick={()=>setMonthDiff(0)} className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Today</button>
        </div>
    )
}