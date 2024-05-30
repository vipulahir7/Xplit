import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";

export default function Right(){
    return(
        <div className="w-[40vw] h-[78vh] rounded-lg m-2 bg-[color:var(--nav-bg)]">
            <ChatUser />
            <Messages />
        </div>
    )
}