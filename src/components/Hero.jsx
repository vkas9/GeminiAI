import { BsPencilSquare } from "react-icons/bs";
import { RiCompass3Line } from "react-icons/ri";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useContext } from "react";
import { geminiContext } from "../../store/react-store";
import { MdEdit } from "react-icons/md";
import { SiGooglebard } from "react-icons/si";

const Hero = () => {
  const {
    input,
    setInput,
    onSet,
    prevPrompt,
    setPrevPrompt,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loader,
    resultData,
  } = useContext(geminiContext);

  return (
    <div className="min-w-[950px] h-[100%] m-auto relative flex flex-col justify-between text-white">
      {!showResult ? (
        <div className=" h-[82%]">
          <div>
            <span className="text-5xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text via-pink-600 text-transparent">
              Hello, Stranger
            </span>
            <br />
            <span className="text-5xl font-bold text-gray-600">
              How can I help you today?
            </span>
          </div>
          <div className="grid grid-cols-4   overflow-auto gap-3 h-[200px]  mt-[80px]">
            <div className="p-4 bg-gray-800 w-[200px]  relative rounded-md ">
              <p>
                Create a 12-week study plan for learning a new language: Italian
              </p>
              <BsPencilSquare
                className=" absolute right-2 bottom-2 hover:cursor-pointer hover:bg-gray-700 rounded-md p-1 box-content"
                size={25}
              />
            </div>
            <div className="p-4 bg-gray-800 w-[200px] relative rounded-md">
              <p>Create a list of power phrases for my resume</p>
              <RiCompass3Line
                className=" absolute right-2 bottom-2 hover:cursor-pointer hover:bg-gray-700 rounded-md p-1 box-content"
                size={30}
              />
            </div>
            <div className="p-4 bg-gray-800 w-[200px] relative  rounded-md">
              <p>Give me ideas for what to do with what's in this image?</p>
              <MdOutlineAddPhotoAlternate
                className=" absolute right-2 bottom-2 hover:cursor-pointer hover:bg-gray-700 rounded-md p-1 box-content"
                size={25}
              />
            </div>
            <div className="p-4 bg-gray-800 w-[200px] relative  rounded-md">
              <p>Walk me through how to apply for a new role</p>
              <RiCompass3Line
                className=" absolute right-2 bottom-2 hover:cursor-pointer hover:bg-gray-700 rounded-md p-1 box-content"
                size={30}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-[100%] max-h-[72vh] mt-5 overflow-y-auto ">
          <div className="max-w-[950px] flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`rounded-full bg-gradient-to-br from-red-500 to-blue-500 hover:cursor-pointer h-[40px] text-white w-[40px]`}
              ></div>
              <h1 className="text-xl">{input}</h1>
              <MdEdit
                size={40}
                className=" p-2 bg-gray-800 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300  hover:cursor-pointer "
              />
            </div>
            <div className="flex ">
            <SiGooglebard size={20} color="pink"  className="min-w-[5%] "/>
            <div>{resultData}</div>
            </div>
          </div>
        </div>
      )}
      <div className=" w-[100%] absolute bottom-0 h-[100px] ">
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setInput(e.target.value);
              onSet(e.target.value);
            }
          }}
          className="outline-none text-xl bg-[#18191A] w-[100%]   h-[70px] pl-6 rounded-full "
          placeholder="Enter a prompt here"
        />
      </div>
    </div>
  );
};
export default Hero;
