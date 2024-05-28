export default function InputField(props){
    return (
        <div className="flex gap-1 flex-col items-center w-[80%] items-center]">
            <label htmlFor={props.id} className="text-md font-semibold">{props.name}</label>
            <input required={props.required ? true : false} id={props.id} name={props.name} min={props.isLimit ?"1" :""} max={props.isLimit ? "999999999" : ""} className="p-2 focus:ring focus:border-blue-200 focus:outline-none text-center text-black w-[100%] rounded-md" type={props.type} placeholder={props.placeHolder}/>
        </div>
    )
}