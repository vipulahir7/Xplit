import React from "react";
import User from "./User";

export default function UserMessage(){
    return(
        <div className="h-[80%] user overflow-x-hidden overflow-y-auto mb-2">
           <User />
           <User />
           <User />
        </div>
    )
}