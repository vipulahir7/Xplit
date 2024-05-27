import Form from "./Form.jsx"
import AuthenticationPopup from "./AuthencationPopup.jsx"

export default function Login(){
    return (
        <div className="bg-[color:var(--primary-bg)] relative h-[80vh] w-[100%] flex justify-center items-center">
            < Form/>
            {/* < AuthenticationPopup text="user not found hello world login jsx"/> */}
        </div>
    )
}