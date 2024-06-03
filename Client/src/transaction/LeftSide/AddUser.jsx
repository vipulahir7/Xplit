import InputField from "../../login/InputField"

export default function AddUser(){
    return (
        <form className="flex justify-center items-center h-[10%] gap-3 w-[100%] ">
            <input type="text" className="p-2 rounded-md text-black w-[80%] text-center text-md" placeholder="Add user email" />
            <button className="bg-[color:var(--primary-btn)] rounded-md hover:scale-[1.05] transition-all ease-out p-2">Add</button>
        </form>
    )

}