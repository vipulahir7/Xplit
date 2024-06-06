import React from "react";

export default function AmountDetails(){
    return (
        <div className="drop-shadow-lg rounded-md flex flex-col items-center justify-center z-10 gap-2 bg-[color:var(--nav-bg)]  h-[30%] self-end ml-2 align-bottom w-[80%]">
            <span className="text-lg">You recieve by / You give </span>
            <span className="text-2xl">Total : {}</span>
        </div>
    )
}