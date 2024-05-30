import { useContext,useState,useEffect } from "react"

export default function MonthDetails(){
    const [yearlySum,setYearlySum] = useState(0);

    useEffect( () => {
        const loadData = async ()=>{
            const res=await fetch("http://localhost:9507/expense/getYearlySum",{
                method:"POST",
                credentials:'include',
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const data = await res.json();
            setYearlySum(data.data.amount);
        }
        loadData();
    },[])

    var newDate = new Date();
    newDate.setMonth(newDate.getMonth());
    let dateString = newDate.toISOString().split("T")[0];
    dateString =dateString.split("-")[0];
    return (
        <div className="drop-shadow-lg rounded-md z-10 gap-2 bg-[color:var(--nav-bg)] flex flex-col justify-center items-center h-[20%] self-start ml-2 align-bottom w-[300px] bg-[color:var(--nav-bg)] rounded-md">
            <span className="text-2xl">{dateString}</span>
            <span className="text-2xl">Total : {yearlySum}</span>
        </div>
    )
}