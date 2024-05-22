export default function NavigatorButton(props){
    return (
        <button className="h-[100%] hover:scale-110 flex items-center"><img className="h-[80%]" src={props.src} alt={props.alt}/></button>
    )
}