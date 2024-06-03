import React from "react";

export default function User({username,email}){
    return(
        <div className="flex space-x-4 px-6 py-4 hover:bg-[color:var(--nav-bg)] rounded-lg m-2 duration-200">
            <div className="w-12 flex justify-center items-center text-lg rounded-full bg-[color:var(--primary-btn)]">
                <h1>{username[0]}</h1>
            </div>
            <div>
                <h1 className="font-semibold">{username}</h1>
                <span>{email}</span>
            </div>
        </div>
    )
}