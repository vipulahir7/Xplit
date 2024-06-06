import { useEffect,useContext } from "react"
import ExpenseHeading from "../ExpenseHeading.jsx"
import AddExpense from "./AddExpense.jsx"
import ExpenseList from "./ExpenseList.jsx"
import { expenseListContext,DateDiffContext } from "../../../globalAttributes.jsx"
import DateDetails from "./DateDetails.jsx"

export default function Daily(){

    const {expenseList,setExpenseList} = useContext(expenseListContext);
    const {dateDiff} = useContext(DateDiffContext);

    const convertToIST = (dateString) => {
        const date = new Date(dateString);
        const newDate=date.toString();
        console.log(newDate);
        const ret=newDate.split(" ")[4]
        return ret;
    };

    useEffect( () => {
        const loadData =async ()=>{
            const res=await fetch("http://localhost:9507/expense/loadExpense",{
                method:"POST",
                credentials:'include',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({date:new Date().setDate(new Date().getDate()+dateDiff)})
            });
    
            const data = await res.json();
            const reversedData = data.data.reverse();
            setExpenseList(reversedData);
        }
        loadData();
    },[dateDiff])

    return (
        <>
        < div className="h-[100%] w-[26%] relative bg-[color:var(--nav-bg)] rounded-lg flex flex-col">
            <ExpenseHeading text="Daily Expenses"/>
            <div className="h-[90%] w-[100%] flex flex-col justify-center">
                <div className="usermessage flex flex-col flex-nowrap h-[95%] overflow-x-hidden overflow-y-auto items-center">
                {expenseList.map(expense => (
                    <ExpenseList key={expense.id} amount={expense.amount} category={expense.category} note={expense.note} time={convertToIST(expense.createdAt)} />
                ) )}
                </div> 
            </div>
        </div>
            <div className="flex flex-col justify-between">
                <DateDetails/>
                <AddExpense/>
            </div>
        </>
    )
}