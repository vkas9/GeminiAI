import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full pt-5 h-[50px] bg-[#111112] ">
      <div className="flex px-5 w-[100%] h-[100%] justify-between items-center">
        <div className="flex items-center gap-2 active:bg-gray-600 transition-colors duration-300 bg-gray-800 py-1 hover:cursor-pointer px-2 rounded-md">
          <span className=" select-none bg-gradient-to-r from-red-400 to-blue-700 bg-clip-text text-transparent font-bold text-3xl  ">
            GeminAI
          </span>
          {/* <IoMdArrowDropdown color="white" size={25} /> */}
        </div>
        <div className={`rounded-full bg-gradient-to-br from-red-500 to-blue-500 hover:cursor-pointer h-[40px] text-white w-[40px]`}></div>
      </div>
    </div>
  );
};
export default Navbar;
