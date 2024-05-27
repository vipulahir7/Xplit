import { useState } from "react";
export default function AuthenticationPopup({text}){

    return (
        <div className={`w-[110%] absolute h-[60%] bg-[color:var(--nav-bg)] flex flex-col items-center justify-center rounded-lg z-10 shadow-lg`}>
            <span className="h-[100%] flex justify-center items-center text-xl text-center">{text}</span>
        </div>
    )
}