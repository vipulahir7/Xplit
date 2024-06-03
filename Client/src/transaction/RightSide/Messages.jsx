import Message from "./Message";
import React, { useContext, useEffect } from "react";
import { CurrentTransactionUserContext, TransactionListContext } from "../../../globalAttributes";

export default function Messages(){

    const {currentTransactionUser}=useContext(CurrentTransactionUserContext);
    const {transactionList,setTransactionList} = useContext(TransactionListContext);
    
    useEffect(()=>{
        async function loadData (){
            const res=await fetch("http://localhost:9507/transaction/loadTransactions",{
                method:"POST",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({recieverEmail:currentTransactionUser.email}) 
            })
            const data=await res.json();
            setTransactionList(data.data);
            console.log(transactionList)
        }

        if(currentTransactionUser.hasOwnProperty("username")){
            loadData();
        }
    },[currentTransactionUser])

    return(
        <div className="usermessage h-[86%] overflow-x-hidden overflow-y-auto">
            {transactionList.length?transactionList.map((list)=> <Message time={list.createdAt} isLeft={currentTransactionUser.email==list.sendBy} amount={list.amount} note={list.note} />):<></>}
        </div>
    )
}