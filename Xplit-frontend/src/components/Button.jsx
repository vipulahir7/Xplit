import GlobalContext from '../../globalAttributes.jsx';
import { useContext } from 'react';

export default function Button(props){

    const { isDark } = useContext(GlobalContext);

    return(
        <button className={`${isDark? "bg-[#5755D6]" : "bg-[#ffffff]"} px-3 h-[60%] rounded-md hover:scale-[1.05] transition-all ease-out"`}>{props.text}</button>
    )
}