import React, { useContext } from "react";
import { CurrentTransactionUserContext } from "../../../globalAttributes";

export default function ChatUser(){

    
    const {currentTransactionUser}=useContext(CurrentTransactionUserContext);
    let isSelected=(currentTransactionUser.hasOwnProperty("username"));

    return(
        <div className="flex h-[8vh] justify-center items-center gap-5 bg-[color:var(--header)] rounded-lg m-2">
            {isSelected && <div className="w-10 aspect-square flex justify-center items-center text-lg rounded-full bg-[color:var(--primary-btn)]">
            <h1>{currentTransactionUser.username[0].toUpperCase()}</h1>
            </div>}
            <div>
                {!isSelected && <h1>Select to continue transactions</h1>}
                <h1 className="font-semibold text-xl">{isSelected && currentTransactionUser.username}</h1>
            </div>
        </div>
    )
}