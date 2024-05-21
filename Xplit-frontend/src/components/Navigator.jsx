import NavigatorButton from "./NavigatorButton.jsx"

export default function Navigator(){
    return (
        <nav className="bg-[#111827] w-[100vw] h-[10vh] flex justify-center" >
            <div className="bg-[#374151] w-[21vw] h-[8vh] rounded-lg flex justify-evenly">
                <NavigatorButton src="../../images/expense-white.svg" alt="expense"/>
                <NavigatorButton src="../../images/transact-white.svg" alt="expense"/>
                <NavigatorButton src="../../images/setting-white.svg" alt="expense"/>
            </div>
        </nav>
    )
}