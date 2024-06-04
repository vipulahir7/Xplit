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
    const {socket,setSocket} =useContext(SocketContext);
    const socketIO = useMemo(()=>io("http://localhost:9507"),[]);
    
    useEffect(()=>{
        socketIO.on("connect", ()=>{
            (async ()=>{
                await fetch("http://localhost:9507/transaction/addOnlineUser",{
                    method:"POST",
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({socketId: socketIO.id})
                })
            })()
            setSocket(socketIO);
        })

        return async ()=>{
            await fetch("http://localhost:9507/transaction/removeOnlineUser",{
                method:"POST",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
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