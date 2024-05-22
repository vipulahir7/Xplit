import { useState ,useContext} from "react";
import GlobalContext from '../../globalAttributes.jsx';

export default function Mode(){

    const { isDark, setIsDark } = useContext(GlobalContext);
    let [isDarkMode,setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        setIsDarkMode(!isDarkMode)
        document.body.setAttribute("data-theme",isDarkMode ? "Dark" : "Light");
    };

    return(
        <button onClick={toggleTheme} className="h-[60%] bg-black-900 outline-0 focus:outline-none hover:scale-[1.1] transition-all ease-in-out active:border-0"><img className="h-[100%]" src={`${isDark? "../../images/Light-mode.svg" : "../../images/Dark-mode.svg"}`} alt="Change mode" /></button>
    )
}