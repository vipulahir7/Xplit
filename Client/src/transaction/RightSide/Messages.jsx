import Message from "./Message";
import React, { useContext, useEffect ,useState} from "react";
import { CurrentTransactionUserContext, SocketContext, TransactionListContext } from "../../../globalAttributes";

export default function Messages(){

    const {currentTransactionUser}=useContext(CurrentTransactionUserContext);
    const {transactionList,setTransactionList} = useContext(TransactionListContext);
    const {socket}=useContext(SocketContext);
    
    const [isListenerBound, setIsListenerBound] = useState(false);

    useEffect(() => {
        if (socket && !isListenerBound) {
            socket.on("transaction-added", (data) => {
                setTransactionList((prev) => [...prev, data]);
            });
            setIsListenerBound(true);
        }
    }, [socket, isListenerBound]);
    
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