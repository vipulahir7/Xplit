import { useContext, useState } from "react"
import InputField from "../../login/InputField"
import {UserListContext} from "../../../globalAttributes.jsx"

export default function AddUser(){

    const {setUserList}=useContext(UserListContext);
    const [showPopup,setShowPopup] =useState(true);

    async function handleAddUser(e){
        e.preventDefault();
        const email = e.target.email.value;

        const res = await fetch("http://localhost:9507/transaction/verifyAddUser",{
            method:"POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email})
        })

        const data=await res.json();
        if(data.success){
            setUserList((prev)=>[...prev,{username:data.data.username,email}]);
        }
        else{
            setShowPopup(true);
        }
    }

    function closePopup(){
        setShowPopup(false);
    }

    return (
        <div className="h-[10%] w-[100%] relative">
            <form onSubmit={handleAddUser} className="flex justify-center items-center h-[100%] gap-3 w-[100%] ">
                <input type="text" name="email" className="p-2 rounded-md text-black w-[80%] text-center text-md" placeholder="Add user email" />
                <button type="submit" className="bg-[color:var(--primary-btn)] rounded-md hover:scale-[1.05] transition-all ease-out p-2">Add</button>
            </form> 
            {showPopup && 
            <>
                <div className="rounded-lg bg-[color:var(--nav-bg)] p-3 w-[15vw] absolute flex items-center justify-center">UserNotFound</div>
                <button className="rounded-lg p-3 bg-[color:var(--primary-btn)] absolute" onClick={closePopup}>X</button>
            </>
            }
        </div>
    )
}