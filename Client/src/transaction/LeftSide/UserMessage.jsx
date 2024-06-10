import React, { useContext, useEffect } from "react";
import User from "./User";
import { UserListContext } from "../../../globalAttributes";

export default function UserMessage(){

    const {userList,setUserList}=useContext(UserListContext);

    useEffect(()=>{

        (async function (){
            const res= await fetch("http://localhost:9507/transaction/loadUserList",{
                method:"POST",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data=await res.json();
            setUserList(data.data)
        })()

    },[userList])

    return(
        <div className="h-[80%] user overflow-x-hidden flex flex-col items-center overflow-y-auto mb-2">
           {userList.map(user => (
                    <User username={user.username} email={user.email} />
            ) )}
        </div>
    )
}