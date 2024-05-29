import { useContext } from "react"
import { DateDiffContext } from "../../../globalAttributes"

export default function DateDetails(){

    const {dateDiff,setDateDiff} = useContext(DateDiffContext);

    var newDate = new Date();
    newDate.setDate(newDate.getDate() + dateDiff);
    const dateString = newDate.toISOString().split("T")[0] 
    return (
        <div className="drop-shadow-lg rounded-md z-10 gap-2 bg-[color:var(--nav-bg)] absolute flex flex-col items-center right-[-310px] top-0 h-[20%] self-end ml-2 align-bottom w-[300px] bg-[color:var(--nav-bg)] rounded-md">
            <span className="text-2xl">{dateString}</span>
            <button onClick={()=>setDateDiff(0)} className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Today</button>
        </div>
    )
}