import React from "react";
import Left from "./LeftSide/Left";
import Right from "./RightSide/Right";
import AddTransaction from "./RightSide/AddTransaction";
import {UserListProvider,CurrentTransactionUserProvider} from "../../globalAttributes.jsx"

export default function Transaction(){
    return(
        <UserListProvider>
            <CurrentTransactionUserProvider>
                <div className="h-[80vh] bg-[color:var(--primary-bg)] ">
                    <div className="flex justify-center items-end drop-shadow-2xl">
                        <Left />
                        <Right />
                        <AddTransaction />
                    </div>
                </div>
            </CurrentTransactionUserProvider>
        </UserListProvider>
    )
}