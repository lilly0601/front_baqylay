import LogoImage from "../../../assets/logo .png"
import {Link} from "react-router-dom"
import ButtonImage from "../../../assets/button_before.png"

export const Navbar=()=>{
    return(
        <div className="bg-black px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img 
                    src={LogoImage}
                    alt="logo"
                    className="w-30 h-10"/>
                </div>

                <div className="flex items-center hidden md:flex gap-3 text-white font-semibold">
                        <Link to="#"> ABOUT US</Link>
                        <Link to="#"> OUR SERVICES</Link>
                        <Link to="#"> WORK WITH US</Link>
                        <Link to="#"> BLOG</Link>

                </div>

                <div className="flex items-center hidden:md-block gap-4 text-white font-semibold">
                        <img
                        src={ButtonImage}
                        alt=""
                        className="w-4 h-4"/>
                        <Link to="#"> GET IN TOUCH</Link>
                </div>
            </div>
        </div>
    )
}