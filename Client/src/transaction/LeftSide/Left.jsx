import React from "react";
import Search from "./Search";
import UserMessage from "./UserMessage";
import AddUser from "./AddUser";

export default function Left(){
    return(
        <div className="w-[25vw] h-[78vh] rounded-lg m-2 bg-[color:var(--header)] flex flex-col gap-2">
            <Search />
            <UserMessage />
            <AddUser />
        </div>
    )
}