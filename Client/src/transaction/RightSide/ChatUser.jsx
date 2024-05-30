import React from "react";

export default function ChatUser(){
    return(
        <div className="flex h-[8vh] justify-center items-center gap-5 bg-[color:var(--header)] rounded-lg m-2">
            <div className="w-12 h-[6vh] flex justify-center items-center text-lg rounded-full bg-[color:var(--primary-btn)]">
                <h1>VA</h1>
            </div>
            <div>
                <h1 className="font-semibold text-xl">Vipul Ahir</h1>
            </div>
        </div>
    )
}