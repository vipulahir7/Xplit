import {GlobalContext} from '../../globalAttributes.jsx';
import { useContext } from 'react';


export default function Logo(){

    const { isDark } = useContext(GlobalContext);

    return (
        <div className="flex items-end">
            <img className="h-[8vh]" src={`${isDark ? "../../images/Logo-white.png" :"../../images/Logo-black.png"}`} alt="Xplit"/>
            <span className="text-3xl relative bottom-2 right-2 font-semibold">plit</span>
        </div>
    )
}