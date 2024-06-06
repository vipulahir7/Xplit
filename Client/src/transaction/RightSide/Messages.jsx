import Message from "./Message";
import React, { useContext, useEffect ,useState, useRef} from "react";
import { CurrentTransactionUserContext, SocketContext, TransactionListContext } from "../../../globalAttributes";

export default function Messages(){

    const {currentTransactionUser}=useContext(CurrentTransactionUserContext);
    const {transactionList,setTransactionList} = useContext(TransactionListContext);
    const {socket}=useContext(SocketContext);
    
    const [isListenerBound, setIsListenerBound] = useState(false);
    const messageContainerRef = useRef(null);

    const convertToIST = (dateString) => {
        const date = new Date(dateString);
        const newDate=date.toString();
        const ret=newDate.split(" ")[4]
        return ret;
    };

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
    },[currentTransactionUser]);

    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [transactionList]);

    return(
        <div className="usermessage h-[86%] overflow-x-hidden overflow-y-auto"  ref={messageContainerRef}>
            {transactionList.length?transactionList.map((list)=> <Message time={convertToIST(list.createdAt)} isLeft={currentTransactionUser.email==list.sendBy} amount={list.amount} note={list.note} />):<></>}
        </div>
    )
}