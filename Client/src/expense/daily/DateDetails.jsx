import { useContext,useState,useEffect } from "react"
import { DateDiffContext,expenseListContext } from "../../../globalAttributes"

export default function DateDetails(){
    const {dateDiff,setDateDiff} = useContext(DateDiffContext);
    const {expenseList} = useContext(expenseListContext);
    const [dailySum,setDailySum] = useState(0);

    useEffect( () => {
        const loadData = async ()=>{
            const res=await fetch("http://localhost:9507/expense/getDailySum",{
                method:"POST",
                credentials:'include',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({date:new Date().setDate(new Date().getDate()+dateDiff)})
            });
            const data = await res.json();
            setDailySum(data.data.amount);
        }
        loadData();
    },[dateDiff,expenseList])
    

    var newDate = new Date();
    newDate.setDate(newDate.getDate() + dateDiff);
    const dateString = newDate.toISOString().split("T")[0] 
    return (
        <div className="drop-shadow-lg rounded-md justify-center z-10 gap-2 bg-[color:var(--nav-bg)] flex flex-col items-center h-[30%] self-end ml-2 align-bottom w-[300px] bg-[color:var(--nav-bg)] rounded-md">
            <span className="text-2xl">{dateString}</span>
            <span className="text-2xl">Total : {dailySum}</span>
            <button onClick={()=>setDateDiff(0)} className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Today</button>
        </div>
    )
}