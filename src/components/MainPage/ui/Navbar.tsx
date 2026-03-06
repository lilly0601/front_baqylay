import LogoImage from "../../../assets/Logo.png"
import { Link } from "react-router"

export const Navbar = () => {
    return (
        <div className="flex items-center px-6 py-4">
            <div className="flex items-center gap-2 flex-1 mx-auto sm:px-6 lg:px-8">
                <img 
                    src={LogoImage}
                    alt="logo"
                    className="w-6 h-6"
                />
                <span className="text-xl text-black font-bold">
                    Travlog
                </span>
            </div>

            <div className="flex gap-6 justify-center flex-1">
                <Link to="#">Home</Link>
                <Link to="#">Discover</Link>
                <Link to="#">Special Deals</Link>
                <Link to="#">Contact</Link>
            </div>

            <div className="flex items-center gap-3 justify-end flex-1">
                <Link to="#" className="text-black font-semibold">
                    Log in
                </Link>
                <button className="hidden md:flex px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
                    Sign Up
                </button>
            </div>

        </div>
    )
}