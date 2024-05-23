export default function NavigatorButton(props){
    return (
        <button className="flex items-center h-[100%]"><img className="h-[90%]" src={props.src} alt={props.alt}/></button>
    )
}