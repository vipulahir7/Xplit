import React from "react";
import InputField from "../../login/InputField";
import { useContext } from "react";
import {CurrentTransactionUserContext,TransactionListContext} from "../../../globalAttributes.jsx"

export default function AddTransaction(){

    const {currentTransactionUser}=useContext(CurrentTransactionUserContext);
    const {transactionList,setTransactionList} = useContext(TransactionListContext);

    async function handleAddTransaction(e){
        e.preventDefault();

        const recieverEmail=currentTransactionUser.email;
        const amount=e.target.amount?.value;
        const note=e.target.note?.value;
        const email =localStorage.getItem("email");

        const data={recieverEmail,amount,note}
        const msg = {
            sendBy : email,
            note,
            amount,
            createdAt:new Date().toString()
        }

        const res=await fetch("http://localhost:9507/transaction/addTransaction",{
            method:"POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        setTransactionList([...transactionList,msg]);
    }

    return (
        <div className=" m-2 w-[22vw] h-[40vh] drop-shadow-lg rounded-t-md flex flex-col items-center align-bottom bg-[color:var(--nav-bg)] rounded-md">
            <div className="w-[100%] h-[20%] bg-[color:var(--header)] rounded-t-md flex items-center justify-center font-semibold text-xl">Add Transaction</div>
            <form onSubmit={handleAddTransaction} className="h-[80%] flex flex-col items-center gap-2">
                <InputField id="amount" name="amount" placeHolder="Enter Amount" type="number" isLimit="true"/>
                <InputField id="Note" name="note" placeHolder="Enter Your Note" type="text"/>
                <button type="submit" className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Add</button>
            </form>
        </div>
    )
}