import React, { useContext } from "react";
import { CurrentTransactionUserContext } from "../../../globalAttributes";

export default function setCurrentTransactionUser({username,email}){

    const {setCurrentTransactionUser}=useContext(CurrentTransactionUserContext);

    return(
        <button onClick={()=> setCurrentTransactionUser({username,email})} className="flex gap-4 p-4 hover:bg-[color:var(--nav-bg)] w-[90%] rounded-lg m-2 duration-200">
            <div className="w-[14%] aspect-square flex justify-center items-center text-lg rounded-full bg-[color:var(--primary-btn)]">
                <h1>{username[0].toUpperCase()}</h1>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="font-semibold">{username}</h1>
                <span>{email}</span>
            </div>
        </button>
    )
}