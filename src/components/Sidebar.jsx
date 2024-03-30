import { VscListFlat } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { GrHistory } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { CiChat1 } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { useContext, useState } from "react";
import { geminiContext } from "../../store/react-store";

const Sidebar = () => {
  const [isOpen, setIsOpen,] = useState(false);
  const { prevPrompt,onSet } = useContext(geminiContext);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    //animate={{width:"200px"}}
    <motion.div
      animate={{ width: isOpen ? "250px" : "55px" }}
      className="h-[100vh] hidden flex-col  py-3 pb-9  bg-[#18191A] relative "
    >
      <div className="mt-3 pl-2 flex flex-col gap-[60px] rounded-full   ">
        <VscListFlat
          color="white"
          size={40}
          onClick={toggle}
          className=" hover:cursor-pointer select-none transition-all duration-300 hover:bg-gray-800 rounded-full p-2 "
        />
        {/* ${isOpen?"w-[160px]":null} */}
        <div
          className={` hover:bg-gray-800 hover:cursor-pointer transition-all duration-200 text-gray-200 font-bold justify-between max-h-[30px] py-2 flex items-center  
        ${isOpen ? "max-w-[105px] px-3" : "w-[20px] px-2"}
         box-content bg-[#202223] rounded-full`}
        >
          <FaPlus color="white" size={21} />
          {isOpen ? (
            <motion.span className="text-[15px] truncate">New Chat</motion.span>
          ) : null}
        </div>
      </div>
      {isOpen ? (
        <div className="h-[450px] transition-all duration-200 flex flex-col gap-3 text-white font-bold pl-5 text-xl mt-5 pr-2  ">
          <h1>Recent</h1>
          <div className="flex flex-col">
            {prevPrompt.map((item) => {
              return (
                <div onClick={()=>onSet(item)} key={item} className="flex gap-5 items-center  hover:bg-gray-700 hover:cursor-pointer transition-all duration-200 rounded-full p-1 pl-4 pr-3">
                  <CiChat1 size={25} />
                  <span className="text-sm truncate w-[130px] overflow-hidden ">
                    {item}
                  </span>
                  <SlOptionsVertical
                    size={20}
                    className="hover:bg-[#002944] transition-all duration-200 px-[6px] py-[3px] rounded-full w box-content"
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="flex flex-col gap-2 pl-1 items-center absolute bottom-10 ">
        <IoMdHelpCircleOutline
          size={23}
          color="white"
          className="hover:bg-gray-600 hover:cursor-pointer transition-all duration-200 rounded-full p-3 box-content"
        />
        <GrHistory
          size={18}
          color="white"
          className="hover:bg-gray-600 hover:cursor-pointer transition-all duration-200 rounded-full p-3 box-content"
        />
        <IoSettingsSharp
          size={18}
          color="white"
          className="hover:bg-gray-600 hover:cursor-pointer transition-all duration-200 rounded-full p-3 box-content"
        />
      </div>
    </motion.div>
  );
};
export default Sidebar;
