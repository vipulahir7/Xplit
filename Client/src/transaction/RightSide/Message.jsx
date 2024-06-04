import React from "react";

export default function Message({time,isLeft,amount,note}){
    return(
           <div>
             <div className={`${isLeft ?"justify-start ml-3" :"justify-end mr-3" } flex m-1`}>
                <div className="flex flex-col">
                    <div className="bg-[color:var(--primary-btn)] text-lg text-center rounded-t-lg">
                        {amount}
                    </div>
                    <div className="bg-[color:var(--primary-btn)] text-lg px-2 rounded-b-md">
                        {note}
                    </div>
                </div>
            </div>
            <div className={`${isLeft ?"justify-start ml-3" :"justify-end mr-3" } flex text-xs`}>{time}</div>
            
        </div>
    )
}