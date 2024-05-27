import { useState } from "react";

export default function UserEmail(){
    const [email,setEmail]=useState("");
    (async function(){
        
        const res=await fetch("http://localhost:9507/user/getUser",{
            method:"POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data=await res.json();
        setEmail(data.data.email);
    })()
    
    window.localStorage.setItem("email",email);
    return (
        <span>{email}</span>
    )
}