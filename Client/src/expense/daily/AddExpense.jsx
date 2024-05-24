import InputField from "../../login/InputField.jsx"
import Button from "../../components/Button.jsx"
export default function AddExpense(){
    return (
        <div className="drop-shadow-lg rounded-t-md absolute flex flex-col items-center right-[-310px] bottom-0 h-[320px] self-end ml-2 align-bottom w-[300px] bg-[color:var(--nav-bg)] rounded-md">
            <div className="w-[100%] h-[20%] bg-[color:var(--header)] rounded-t-md flex items-center justify-center font-semibold text-xl">Add Expense</div>
            <form action="" className="h-[80%] flex flex-col items-center gap-2">
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
                <Button text="Add"/>
            </form>
        </div>
    )
}