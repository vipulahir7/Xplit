export default function FormHeading(props){
    return (
        <div className="flex items-center justify-center text-3xl font-bold w-[100%] h-[15%] bg-[color:var(--header)] rounded-t-lg">
            <h1>{props.text}</h1>
        </div>
    )
}