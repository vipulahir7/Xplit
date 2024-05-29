export default function MonthlyList({date,amount}){
    return (
        <div className="flex justify-around items-center rounded-md bg-[color:var(--notes-bg)] mt-2 mb-2 w-[90%]">
            <span>{date}</span>
            <span>{amount}</span>
        </div>
    )
}