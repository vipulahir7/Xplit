import { Link } from 'react-router-dom';
import './index.css'

export default function NotSignIn() {
    return (
        <div className="h-[80vh] bg-[color:var(--primary-bg)]">
            <div className=" flex items-center justify-center h-[80vh]">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4 animate-pulse">You are not</h1>
                    <h2 className="text-4xl font-bold mb-4 animate-pulse">logged-in</h2>
                    <div class="container mx-auto text-center my-10">
                        <p class="text-xl font-semibold mb-1">"If you want to facilities</p>
                        <p class="text-xl font-semibold mb-1">like personal expense tracker, collaborate with friends more easily, </p>
                        <p class="text-xl font-semibold mb-1"> you can split bills, share expenses, Login now, </p>
                        <p class="text-xl font-semibold mb-1">Xplit, simplifying shared finances among friends."</p>
                    </div>
                    <Link to="/login" className="bg-[color:var(--nav-bg)] font-bold  py-3 px-8 rounded-full">
                        login
                    </Link>
                </div>
            </div>
        </div>
    )
}