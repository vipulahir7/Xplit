export default function ExpenseList({icon,amount, category,note}){
    return (
        <div className="flex flex-col items-center rounded-md bg-[color:var(--notes-bg)] mt-2 mb-2 w-[90%]">
            <div className="flex w-[100%] h-[50px]">
                <div className="h-[100%] w-[25%] flex items-center">
                    <img className="h-[70%]" src="/images/Logo-white.png" alt="" />
                </div>
                <div className="w-[50%] h-[100%] truncate hover:text-ellipsis flex items-center text-lg">{category}</div>
                <span className="w-[25%] text-xl text-center flex items-center text-lg">{amount}</span>
            </div>
            {note ? <span className="w-[100%] bg-[color:var(--notes-secondary-bg)] p-2 rounded-md h-auto">{note}</span> :null}
            
        </div>
    )
}