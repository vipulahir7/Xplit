import GlobalContext from '../../globalAttributes.jsx';
import { useContext } from 'react';

export default function Body(){

    const { isDark } = useContext(GlobalContext);

    return(
        <div className={`w-[100vw] h-[80vh] ${isDark? "bg-[#111827]" : "bg-[#ffffff]"}`}></div>
    )
}