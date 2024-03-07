import Navbar from "./components/Navbar";

import GeminiProvider, { geminiContext } from "../store/react-store";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { useContext } from "react";
function App() {
  // const{input,setInput,onSet,prevPrompt,setPrevPrompt,recentPrompt,setRecentPrompt,showResult,loader,resultData}=useContext(geminiContext);
  return (
    <GeminiProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex   flex-col h-[100vh] w-[100vw]">
          <Navbar />
          <Hero />
        </div>
      </div>
    </GeminiProvider>
  );
}

export default App;
