import React from "react";
import { useEffect,useContext, useState} from "react";
import { CurrentTransactionUserContext, TransactionListContext } from "../../../globalAttributes";

export default function AmountDetails(){
    const [total,setTotal] = useState(0);
    const [email,setemail] = useState();
    const [chatemail,setchatemail] = useState();
    const {currentTransactionUser}=useContext(CurrentTransactionUserContext);
    const {transactionList} = useContext(TransactionListContext);
    const currentUserEmail = localStorage.getItem("email");

    useEffect(()=>{
        async function loadSum(){
            const recieverEmail=currentTransactionUser.email;
            const data = {recieverEmail};

            const res=await fetch("http://localhost:9507/transaction/getSum",{
            method:"POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
            })

            const responseData = await res.json();
            setTotal(responseData.data.total);
            setemail(responseData.data.firstPerson);
            setchatemail(responseData.data.firstPers);
        }
        loadSum();
    },[transactionList])

    function checkGive(){
        if((total<0) && (email == chatemail)){
            return true;
        }
        else if((total>0) && (email != chatemail)){
            return true;
        }
        else{
            return false;
        }
    }

    return (
        <div className="drop-shadow-lg rounded-md flex flex-col items-center justify-center z-10 gap-2 bg-[color:var(--nav-bg)]  h-[30%] self-end ml-2 align-bottom w-[80%]">
            <span className="text-lg">You will {checkGive()?<>give</>:<>get</>} </span>
            <span className="text-2xl">Total : {Math.abs(total)}</span>
        </div>
    )
}