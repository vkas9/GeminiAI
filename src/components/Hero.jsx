import { BsPencilSquare } from "react-icons/bs";
import { RiCompass3Line } from "react-icons/ri";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";


const Hero=()=>{
    return <div className="max-w-[900px] h-[100%] m-auto flex flex-col justify-between text-white">
        <div >
            <div>
                <span className="text-5xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text via-pink-600 text-transparent" >Hello, Stranger</span><br/>
                <span className="text-5xl font-bold text-gray-600">How can I help you today?</span>
            </div>
            <div className="grid grid-cols-4 gap-3 h-[200px] mt-[80px]">
                <div className="p-4 bg-gray-800  relative rounded-md ">
                    <p>Create a 12-week study plan for learning a new language: Italian</p>
                    <BsPencilSquare className=" absolute right-2 bottom-2 hover:cursor-pointer hover:bg-gray-700 rounded-md p-1 box-content" size={25} />

                </div>
                <div  className="p-4 bg-gray-800 relative rounded-md">
                    <p>Create a list of power phrases for my resume</p>
                    <RiCompass3Line className=" absolute right-2 bottom-2 hover:cursor-pointer hover:bg-gray-700 rounded-md p-1 box-content" size={30} />
                </div>
                <div className="p-4 bg-gray-800 relative  rounded-md">
                    <p>Give me ideas for what to do with what's in this image?</p>
                    <MdOutlineAddPhotoAlternate className=" absolute right-2 bottom-2 hover:cursor-pointer hover:bg-gray-700 rounded-md p-1 box-content" size={25} />
                </div>
                <div className="p-4 bg-gray-800 relative  rounded-md">
                    <p>Walk me through how to apply for a new role</p>
                    <RiCompass3Line className=" absolute right-2 bottom-2 hover:cursor-pointer hover:bg-gray-700 rounded-md p-1 box-content" size={30} />
                </div>
            </div>
        </div>
        <div className=" max-w-[850px]  h-[100px] mx-auto">
            <input type="text" className="outline-none text-xl bg-[#18191A] w-[800px] h-[70px] pl-6 rounded-full " placeholder="Enter a prompt here"/>
        </div>


    </div>
}
export default Hero;