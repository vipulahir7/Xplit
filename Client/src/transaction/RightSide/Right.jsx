import React from "react";
import ChatUser from "./ChatUser";
import Message from "./Message";

export default function Right(){
    return(
        <div className="w-[40vw] h-[78vh] rounded-lg m-2 bg-[color:var(--nav-bg)]">
            <ChatUser/>
            <Message />
        </div>
    )
}