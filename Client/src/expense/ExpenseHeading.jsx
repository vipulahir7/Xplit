export default function ExpenseHeading(props){
    return (
        <div className="flex items-center justify-center w-[100%] h-[10%] bg-[color:var(--header)] rounded-t-lg">
            <h2 className="text-[180%]">{props.text}</h2>
        </div>
    )
}