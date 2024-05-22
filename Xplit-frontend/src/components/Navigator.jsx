import NavigatorButton from "./NavigatorButton.jsx"
import GlobalContext from '../../globalAttributes.jsx';

import { useContext } from "react";

export default function Navigator(){

    const { isDark } = useContext(GlobalContext);

    return (
        <nav className="bg-[color:var(--primary-bg)] w-[100vw] h-[10vh] flex justify-center">
            <div className="bg-[color:var(--nav-bg)] w-[21vw] h-[8vh] rounded-lg flex justify-evenly">
                <NavigatorButton src={`${isDark ? "../../images/expense-white.svg" : "../../images/expense-black.svg"}`} alt="expense"/>
                <NavigatorButton src={`${isDark ? "../../images/transact-white.svg" : "../../images/transact-black.svg"}`} alt="expense"/>
                <NavigatorButton src={`${isDark ? "../../images/setting-white.svg": "../../images/setting-black.svg"}`} alt="expense"/>
            </div>
        </nav>
    )
}