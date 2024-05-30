import React from "react";
import Left from "./LeftSide/Left";
import Right from "./RightSide/Right";
import AddTransaction from "./RightSide/AddTransaction";

export default function Transaction(){
    return(
        <div className="flex h-[80vh] bg-[color:var(--primary-bg)] justify-center items-end drop-shadow-2xl">
            <Left />
            <Right />
            <AddTransaction />
        </div>
    )
}