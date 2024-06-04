import React from "react";
import Left from "./LeftSide/Left";
import Right from "./RightSide/Right";
import { useContext,useMemo,useEffect,useState } from "react";
import AddTransaction from "./RightSide/AddTransaction";
import {UserListProvider,CurrentTransactionUserContext, TransactionListProvider, SocketContext} from "../../globalAttributes.jsx"
import { io } from "socket.io-client";

export default function Transaction(){
    
    const {currentTransactionUser}=useContext(CurrentTransactionUserContext);
    let isSelected=(currentTransactionUser.hasOwnProperty("username"));
    const {setsocket} =useContext(SocketContext);
    
    useEffect(()=>{
        const socket = useMemo(()=>io("http://localhost:9507"),[]);
        socket.on("connect", ()=>{
            setsocket(socket);
        })

        return ()=>{
          socket.disconnect();
        };
      },[])

    return(
        <TransactionListProvider>
            <UserListProvider>
                <div className="h-[80vh] bg-[color:var(--primary-bg)] ">
                    <div className="flex justify-center items-end drop-shadow-2xl">
                        <Left />
                        <Right />
                        {isSelected && <AddTransaction />}
                    </div>
                </div>
            </UserListProvider>
        </TransactionListProvider>
    )
}