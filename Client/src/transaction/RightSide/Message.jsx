import React from "react";

export default function Message({time,isLeft,amount,note}){
    return(
        <div>
             <div className={`${isLeft ?"justify-start ml-3" :"justify-end mr-3" } flex `}>
                <div className="bg-[color:var(--primary-btn)] text-lg p-2 rounded-lg">{amount}<span>{note}</span></div>
            </div>
        </div>
    )
}