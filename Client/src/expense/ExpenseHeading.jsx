import { useContext } from "react"
import { DateDiffContext } from "../../globalAttributes"

export default function ExpenseHeading(props){

    const {dateDiff, setDateDiff} = useContext(DateDiffContext);

    function decrementDiff(){
        setDateDiff(dateDiff - 1);
    }
    function incrementDiff(){
        setDateDiff(dateDiff + 1);
    }

    return (
            <div className="flex items-center justify-around w-[100%] h-[10%] bg-[color:var(--header)] rounded-t-lg">
                <button onClick={decrementDiff} className="bg-[color:var(--primary-btn)] drop-shadow-lg rounded-3xl p-2"><img src="/images/Move-left.svg" alt="previous" /></button>
                    <h2 className="text-[140%] font-semibold">{props.text}</h2>
                <button onClick={incrementDiff} className="bg-[color:var(--primary-btn)] drop-shadow-lg rounded-3xl p-2"><img src="/images/Move-right.svg" alt="next" /></button>
            </div>
    )
}