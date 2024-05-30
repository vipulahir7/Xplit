import React from "react";
import Left from "./LeftSide/Left";
import Right from "./RightSide/Right";
import AddTransaction from "./RightSide/AddTransaction";

export default function Transaction(){
    return(
        <div className="h-[80vh] bg-[color:var(--primary-bg)] ">
            <div className="flex justify-center items-end drop-shadow-2xl">
                <Left />
                <Right />
                <AddTransaction />
            </div>
        </div>
    )
}