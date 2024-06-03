import Message from "./Message";
import React, { useContext } from "react";
import { CurrentTransactionUserContext } from "../../../globalAttributes";

export default function Messages(){

    const {currentTransactionUser}=useContext(CurrentTransactionUserContext);
    let isSelected=(currentTransactionUser.hasOwnProperty("username"));

    return(
        <div className="usermessage h-[86%] overflow-x-hidden overflow-y-auto">
            {isSelected && <span>render : {currentTransactionUser.email}</span>}
        </div>
    )
}