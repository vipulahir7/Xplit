export default function ExpenseList({icon,amount, category,note,time}){
    return (
        <div className="flex flex-col items-center rounded-md bg-[color:var(--notes-bg)] mt-2 mb-2 w-[90%]">
            <div className="flex w-[100%] h-[50px]">
                <div className="h-[100%] w-[20%] flex justify-center items-center">
                    <img className="h-[90%] bg-[color:var(--primary-btn)] p-[10%] rounded-lg" src={`/Expense/Expense-${category}.svg`} alt="" />
                </div>
                <div className="w-[48%] h-[100%] truncate hover:text-ellipsis flex items-center text-lg">{category}</div>
                <span className="w-[32%] text-xl text-center flex items-center text-lg">{amount}</span>
            </div>
            {note ? <span className="w-[100%] bg-[color:var(--notes-secondary-bg)] p-2 h-auto">{note}</span> :null}
            <div className="text-[80%] bg-[color:var(--notes-secondary-bg)] w-[100%] rounded-b-md text-end pr-3">{time}</div>
        </div>
    )
}