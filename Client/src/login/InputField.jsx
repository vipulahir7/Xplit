export default function InputField(props){
    return (
        <div className="flex gap-1 flex-col items-center w-[80%] items-center]">
            <label htmlFor={props.id} className="text-md font-semibold">{props.name}</label>
            <input id={props.id} name={props.name} className="p-2 focus:ring focus:border-blue-200 focus:outline-none text-center text-black w-[100%] rounded-md" type={props.type} placeholder={props.placeHolder}/>
        </div>
    )
}