export default function MonthlyList({ date, amount }) {
    return (
        <div className="monthly-item flex justify-between items-center rounded-md bg-[color:var(--notes-secondary-bg)] mt-2 mb-2 w-[90%] p-4 transition-all duration-300 hover:bg-[color:var(--notes-hover-bg)] hover:scale-105 hover:text-black">
            <span className="date text-lg font-medium">{date}</span>
            <span className="amount text-lg font-semibold">{amount}</span>
        </div>
    )
}