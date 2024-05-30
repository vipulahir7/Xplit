import React from "react";
import InputField from "../../login/InputField";

export default function AddTransaction(){
    return (
        <div className=" m-2 w-[22vw] h-[40vh] drop-shadow-lg rounded-t-md flex flex-col items-center align-bottom bg-[color:var(--nav-bg)] rounded-md">
            <div className="w-[100%] h-[20%] bg-[color:var(--header)] rounded-t-md flex items-center justify-center font-semibold text-xl">Add Transaction</div>
            <form className="h-[80%] flex flex-col items-center gap-2">
                <InputField id="amount" name="amount" placeHolder="Enter Amount" type="number" isLimit="true"/>
                <InputField id="Note" name="note" placeHolder="Enter Your Note" type="text"/>
                <button className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Add</button>
            </form>
        </div>
    )
}