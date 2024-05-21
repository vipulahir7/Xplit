export default function NavigatorButton(props){
    return (
        <button className="h-[100%] flex items-center"><img className="h-[80%]" src={props.src} alt={props.alt}/></button>
    )
}