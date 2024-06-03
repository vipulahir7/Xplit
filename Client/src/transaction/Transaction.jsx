import React from "react";
import Left from "./LeftSide/Left";
import Right from "./RightSide/Right";
import { useContext } from "react";
import AddTransaction from "./RightSide/AddTransaction";
import {UserListProvider,CurrentTransactionUserContext} from "../../globalAttributes.jsx"

export default function Transaction(){

    const {currentTransactionUser}=useContext(CurrentTransactionUserContext);
    let isSelected=(currentTransactionUser.hasOwnProperty("username"));

    return(
        <UserListProvider>
            <div className="h-[80vh] bg-[color:var(--primary-bg)] ">
                <div className="flex justify-center items-end drop-shadow-2xl">
                    <Left />
                    <Right />
                    {isSelected && <AddTransaction />}
                </div>
            </div>
        </UserListProvider>
    )
}