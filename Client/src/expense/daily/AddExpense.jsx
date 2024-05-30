import InputField from "../../login/InputField.jsx"
import Button from "../../components/Button.jsx"
import { DateDiffContext, expenseListContext } from "../../../globalAttributes.jsx";
import { useContext } from "react";

export default function AddExpense(){

    const {expenseList,setExpenseList} = useContext(expenseListContext);
    const {dateDiff} = useContext(DateDiffContext)

    const HandleAddExpense = async function(e){
        e.preventDefault();
        let amount = e.target.amount.value;
        let note = e.target.note.value ? e.target.note.value : "";
        let category = e.target.category.value;

        const reqData ={
            amount,
            note,
            category,
            createDate:new Date().setDate(new Date().getDate()+dateDiff)
        }

        const res = await fetch("http://localhost:9507/expense/addExpense",{
            method:"POST",
            credentials:'include',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(reqData)
        })
        if(res.ok){
            const responseData = await res.json();
            setExpenseList(expenseList => [responseData.data , ...expenseList]);
        }
        else{
            console.log("failed to add data");
        }
    }

    return (
        <div className="drop-shadow-lg rounded-t-md flex flex-col items-center h-[320px] self-end ml-2 align-bottom w-[300px] bg-[color:var(--nav-bg)] rounded-md">
            <div className="w-[100%] h-[20%] bg-[color:var(--header)] rounded-t-md flex items-center justify-center font-semibold text-xl">Add Expense</div>
            <form onSubmit={HandleAddExpense} className="h-[80%] flex flex-col items-center gap-2">
                <InputField id="amount" name="amount" placeHolder="Enter Amount" type="number" isLimit="true"/>
                <InputField id="Note" name="note" placeHolder="Enter Your Note" type="text"/>
                <select name="category" id="category" className="bg-[color:var(--header)] text-center w-[80%] py-1 rounded-md">
                    <option value="other" selected>Other</option>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="health">Health</option>
                    <option value="shop">Shop</option>
                    <option value="rent">Rent</option>
                </select>
                <button className="bg-[color:var(--primary-btn)] p-3 rounded-md hover:scale-[1.05] transition-all ease-out">Add</button>
            </form>
        </div>
    )
}