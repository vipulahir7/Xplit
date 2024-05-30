import React from "react";

export default function User(){
    return(
        <div className="flex space-x-4 px-6 py-4 hover:bg-[color:var(--nav-bg)] rounded-lg m-2 duration-200">
            <div className="w-12 flex justify-center items-center text-lg rounded-full bg-[color:var(--primary-btn)]">
                <h1>VA</h1>
            </div>
            <div>
                <h1 className="font-semibold">Vipul Ahir</h1>
                <span>vipulahir07@gmail.com</span>
            </div>
        </div>
    )
}