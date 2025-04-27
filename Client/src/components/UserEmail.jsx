import { useContext } from "react";
import { EmailContext } from "../../globalAttributes.jsx";

export default function UserEmail(){
    const {email, setEmail} = useContext(EmailContext);

    (async function(){
        
        const res=await fetch(`${import.meta.env.VITE_BackendAPI_URL}/user/getUser`,{
            method:"POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data=await res.json();
        setEmail(data.data.email);
    })()
    
    return (
        <span>{email}</span>
        // <span>gmail.com</span>
    )
}