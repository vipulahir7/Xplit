export default function Button(props){
    return(
        <button className="bg-[#5755D6] text-white rounded-md p-2 hover:scale-[1.05] transition-all ease-out">{props.text}</button>
    )
}