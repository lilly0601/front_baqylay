import WorkImage from "../../../assets/work.png"
import FrameImage from "../../../assets/frame.png"

export const Menu=() =>{
    return(
        <div className="flex justify-between items-center px-6 py-16">
            <div className="max-w-lg">
                <div className="flex items-center mt-6 px-6 py-3 bg-white gap-2 text-pink-500 rounded-lg ">
                    <span>Explore the world</span>
                    <img 
                    src={WorkImage}
                    alt="work"
                    className="w-5 h-5"/>

                </div>
                <h2 className="text-5xl font-bold mt-4">
                    Travel top <br />
                    destination<br />
                    of the world
                </h2>

                <p className="text-gray-500 mt-4">
                    We always make our customer happy by <br />
                    providing <br />
                    as many choices as possible.
                </p>

                <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg">
                    Get Started
                </button>
                <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg">
                    Watch Demo
                </button>
            </div>

            <div className="flex justify-end items-center gap-2 py-4 px-4">
                <img 
                src={FrameImage}
                alt="frame"
                className="w-160 h-160"/>
            </div>
        </div>
    )
}