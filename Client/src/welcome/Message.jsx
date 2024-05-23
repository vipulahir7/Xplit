import Button from '../components/Button';
import { Link } from 'react-router-dom';
import '../index.css'  

export default function Massage() {
    return (
        <div className=" flex items-center justify-center h-[80vh]">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4 animate-pulse">Welcome to Xplit</h1>
                <div class="container mx-auto text-center my-10">
                    <p class="text-xl font-semibold mb-1">"From coffee dates to</p>
                    <p class="text-xl font-semibold mb-1">weekend getaways, capture every moment and expense seamlessly with</p>
                    <p class="text-xl font-semibold mb-1">Xplit, simplifying shared finances among friends."</p>
                </div>
                <Link to="/signup" className="bg-[color:var(--nav-bg)] font-bold  py-3 px-4 rounded-full">
                    Get Started
                </Link>
            </div>
        </div>
    )
}