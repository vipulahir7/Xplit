import React from "react";

export default function Message({time,isLeft,amount,note}){
    return(
           <div>
             <div className={`${isLeft ?"justify-start ml-3 mr-20" :"justify-end mr-3 ml-20" } min-w-[20%] flex `}>
                <div className="flex flex-col ">
                    <div className="bg-[color:var(--primary-btn)] text-lg px-1 rounded-t-lg text-pretty">
                        {amount}
                    </div>
                    <div className="bg-[color:var(--primary-btn)] text-lg px-1 rounded-b-md text-pretty">
                        {note}
                    </div>
                </div>
            </div>
            <div className={`${isLeft ?"justify-start ml-3" :"justify-end mr-3" } flex text-xs`}>{time}</div>    
        </div>
    )
}